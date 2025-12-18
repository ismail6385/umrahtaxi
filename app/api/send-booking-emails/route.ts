import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL || 'taxiserviceksa9988@gmail.com';

if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set in environment variables');
}

if (!adminEmail) {
    console.error('ADMIN_EMAIL is not set in environment variables');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Helper function to format booking ID
function formatBookingId(id: string | undefined): string {
    if (!id) return 'N/A';
    return `#${id.slice(0, 8).toUpperCase()}`;
}

// Helper function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone: string | undefined): string {
    if (!phone) return '';
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // If it starts with 0, remove it (Saudi Arabia format)
    if (cleaned.startsWith('0')) {
        return cleaned.substring(1);
    }
    // If it doesn't start with country code, assume Saudi Arabia (+966)
    if (!cleaned.startsWith('966')) {
        return `966${cleaned}`;
    }
    return cleaned;
}

// Helper function to format date safely
function formatDate(date: string | Date | undefined): string {
    if (!date) return 'N/A';
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
    } catch {
        return String(date);
    }
}

export async function POST(request: NextRequest) {
    try {
        // Validate request body
        const body = await request.json();

        if (!body || !body.booking) {
            return NextResponse.json(
                { error: 'Missing booking data in request body' },
                { status: 400 }
            );
        }

        const { booking, price } = body;

        // Validate required fields
        const requiredFields = [
            'customer_name',
            'customer_email',
            'customer_phone',
            'pickup_location',
            'destination',
            'pickup_date',
            'pickup_time',
            'vehicle_type'
        ];

        const missingFields = requiredFields.filter(field => !booking[field]);

        if (missingFields.length > 0) {
            return NextResponse.json(
                {
                    error: 'Missing required booking fields',
                    missingFields
                },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!resend) {
            console.error('Resend client not initialized - RESEND_API_KEY missing');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        if (!adminEmail) {
            console.error('ADMIN_EMAIL not set');
            return NextResponse.json(
                { error: 'Admin email not configured' },
                { status: 500 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(booking.customer_email)) {
            return NextResponse.json(
                { error: 'Invalid customer email format' },
                { status: 400 }
            );
        }

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // Send email to customer
        let customerEmail;
        try {
            customerEmail = await resend.emails.send({
                from: 'Taxi Service KSA <noreply@taxiserviceksa.com>',
                to: [booking.customer_email],
                subject: 'Booking Confirmation - Taxi Service KSA',
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #C6FF00 0%, #B8E600 100%); padding: 30px; text-center; border-radius: 10px 10px 0 0; }
                        .header h1 { color: #000; margin: 0; font-size: 28px; }
                        .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                        .booking-details { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
                        .detail-row:last-child { border-bottom: none; }
                        .label { color: #666; font-weight: 600; }
                        .value { color: #000; font-weight: bold; }
                        .footer { background: #f5f5f5; padding: 20px; text-center; border-radius: 0 0 10px 10px; font-size: 14px; color: #666; }
                        .button { display: inline-block; background: #C6FF00; color: #000; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                        .price-row { background-color: #f0f0f0; margin: 10px -20px; padding: 10px 20px; border-left: 4px solid #C6FF00; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚗 Booking Confirmed!</h1>
                        </div>
                        <div class="content">
                            <p>Dear <strong>${booking.customer_name}</strong>,</p>
                            <p>Thank you for choosing Taxi Service KSA! Your booking has been confirmed.</p>
                            
                            <div class="booking-details">
                                <h3 style="margin-top: 0; color: #000;">Booking Details</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Booking ID:</span>
                                    <span class="value">${formatBookingId(booking.id)}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Pickup Location:</span>
                                    <span class="value">${booking.pickup_location}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Destination:</span>
                                    <span class="value">${booking.destination}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Date & Time:</span>
                                    <span class="value">${booking.pickup_date} at ${booking.pickup_time}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Vehicle:</span>
                                    <span class="value">${booking.vehicle_type}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Passengers:</span>
                                    <span class="value">${booking.passengers || 1} passengers</span>
                                </div>
                                
                                ${price ? `
                                <div class="detail-row price-row">
                                    <span class="label">Total Price:</span>
                                    <span class="value" style="font-size: 1.2em; color: #000;">SAR ${price}</span>
                                </div>
                                ` : ''}

                                <div class="detail-row">
                                    <span class="label">Status:</span>
                                    <span class="value" style="color: #C6FF00;">Pending Confirmation</span>
                                </div>
                            </div>
                            
                            <p>Our team will contact you shortly on <strong>+${formatPhoneForWhatsApp(booking.customer_phone)}</strong> to confirm the final details.</p>
                            
                            <center>
                                ${booking.customer_phone ? `<a href="https://wa.me/${formatPhoneForWhatsApp(booking.customer_phone)}" class="button">Contact Us on WhatsApp</a>` : ''}
                            </center>
                            
                            <p style="margin-top: 30px; font-size: 14px; color: #666;">
                                If you have any questions, feel free to reach out to us at <a href="mailto:taxiserviceksa9988@gmail.com">taxiserviceksa9988@gmail.com</a>
                            </p>
                        </div>
                        <div class="footer">
                            <p><strong>Taxi Service KSA</strong></p>
                            <p>Premium Chauffeur Services in Saudi Arabia</p>
                            <p>Jeddah | Makkah | Madinah | Riyadh</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Customer email sent:', customerEmail);
        } catch (customerEmailError: any) {
            console.error('Failed to send customer email:', {
                error: customerEmailError.message,
                name: customerEmailError.name,
                response: customerEmailError.response || customerEmailError
            });

            // Check if it's a domain verification error
            const errorMessage = customerEmailError.message || '';
            if (errorMessage.includes('domain') || errorMessage.includes('verify') || errorMessage.includes('not verified')) {
                throw new Error(`Email domain not verified. Please verify 'taxiserviceksa.com' in Resend dashboard. Error: ${customerEmailError.message}`);
            }

            throw new Error(`Customer email failed: ${customerEmailError.message}`);
        }

        // Send email to admin
        let adminEmailResult;
        try {
            console.log('Sending admin email to:', adminEmail);
            adminEmailResult = await resend.emails.send({
                from: 'Taxi Service KSA <noreply@taxiserviceksa.com>',
                to: [adminEmail],
                subject: `🚗 New Booking - ${booking.customer_name} ${price ? `(SAR ${price})` : ''}`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #000 0%, #262626 100%); padding: 30px; text-center; border-radius: 10px 10px 0 0; }
                        .header h1 { color: #C6FF00; margin: 0; font-size: 28px; }
                        .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                        .booking-details { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
                        .detail-row:last-child { border-bottom: none; }
                        .label { color: #666; font-weight: 600; }
                        .value { color: #000; font-weight: bold; }
                        .alert { background: #C6FF00; color: #000; padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: bold; text-align: center; }
                        .button { display: inline-block; background: #C6FF00; color: #000; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
                        .price-alert { background: #f0f0f0; color: #000; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 15px; font-size: 1.2em; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚗 NEW BOOKING ALERT!</h1>
                        </div>
                        <div class="content">
                            <div class="alert">
                                ⚡ Action Required: Contact customer immediately!
                            </div>
                            
                            ${price ? `
                            <div class="price-alert">
                                💰 Quoted Price: SAR ${price}
                            </div>
                            ` : ''}

                            <div class="booking-details">
                                <h3 style="margin-top: 0; color: #000;">Customer Information</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Name:</span>
                                    <span class="value">${booking.customer_name}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Email:</span>
                                    <span class="value">${booking.customer_email}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Phone:</span>
                                    <span class="value">${booking.customer_phone}</span>
                                </div>
                            </div>
                            
                            <div class="booking-details">
                                <h3 style="margin-top: 0; color: #000;">Trip Details</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Booking ID:</span>
                                    <span class="value">${formatBookingId(booking.id)}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">From:</span>
                                    <span class="value">${booking.pickup_location || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">To:</span>
                                    <span class="value">${booking.destination || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Date:</span>
                                    <span class="value">${booking.pickup_date || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Time:</span>
                                    <span class="value">${booking.pickup_time || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Vehicle:</span>
                                    <span class="value">${booking.vehicle_type || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Passengers:</span>
                                    <span class="value">${booking.passengers || 1}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Luggage:</span>
                                    <span class="value">${booking.luggage || 0}</span>
                                </div>
                            </div>
                            
                            <center>
                                ${booking.customer_phone ? `<a href="https://wa.me/${formatPhoneForWhatsApp(booking.customer_phone)}" class="button">📱 WhatsApp Customer</a>` : ''}
                                ${booking.customer_phone ? `<a href="tel:${booking.customer_phone}" class="button">📞 Call Customer</a>` : ''}
                                <a href="mailto:${booking.customer_email}" class="button">✉️ Email Customer</a>
                            </center>
                            
                            <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
                                Booking received at ${formatDate(booking.created_at || new Date())} (Riyadh Time)
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Admin email sent:', adminEmailResult);
        } catch (adminEmailError: any) {
            console.error('Failed to send admin email:', {
                error: adminEmailError.message,
                name: adminEmailError.name,
                response: adminEmailError.response || adminEmailError
            });
            // Don't throw here - customer email was sent, admin email failure is less critical
            console.warn('Admin email failed but customer email was sent successfully');
        }

        console.log('Both emails sent successfully!');

        return NextResponse.json({
            success: true,
            customerEmail,
            adminEmail: adminEmailResult || { error: 'Admin email failed but customer email sent' },
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        // Log full error details to server console
        console.error('========== EMAIL API ERROR ==========');
        console.error('Error Message:', error.message);
        console.error('Error Name:', error.name);
        console.error('Error Stack:', error.stack);
        if (error.response) {
            console.error('Resend API Response:', JSON.stringify(error.response, null, 2));
        }
        if (error.cause) {
            console.error('Error Cause:', error.cause);
        }
        console.error('=====================================');

        // Return detailed error to client
        return NextResponse.json({
            error: 'Failed to send emails',
            message: error.message || 'Unknown error',
            name: error.name || 'Error',
            details: error.response ? JSON.stringify(error.response) : error.stack || 'No additional details'
        }, { status: 500 });
    }
}
