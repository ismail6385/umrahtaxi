import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL || 'umrahtaxi22@gmail.com';

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
    // Remove all non-digit characters (including + sign)
    const cleaned = phone.replace(/\D/g, '');

    // If number already starts with a country code (more than 10 digits), use as is
    if (cleaned.length > 10) {
        return cleaned;
    }

    // If it starts with 0, remove it and add Saudi code
    if (cleaned.startsWith('0')) {
        return `966${cleaned.substring(1)}`;
    }

    // If it's just a local number, add Saudi code
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

        const { booking, price, confirmationToken } = body;

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
            const confirmationUrl = confirmationToken
                ? `${request.url.replace('/api/send-booking-emails', '')}/api/confirm-booking?token=${confirmationToken}`
                : '';

            customerEmail = await resend.emails.send({
                from: 'Umrah Taxi <bookings@umrahtaxi.site>',
                to: [booking.customer_email],
                subject: `Booking Received - Umrah Taxi (#${booking.id.slice(0, 8)})`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { 
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6; 
                            color: #333;
                            margin: 0;
                            padding: 0;
                            background-color: #f5f5f5;
                        }
                        .container { 
                            max-width: 600px; 
                            margin: 20px auto; 
                            background: #ffffff;
                            border-radius: 12px;
                            overflow: hidden;
                            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                        }
                        .header { 
                            background: linear-gradient(135deg, #d97706 0%, #b45309 100%); 
                            padding: 40px 30px; 
                            text-align: center;
                        }
                        .header h1 { 
                            color: #fff; 
                            margin: 0; 
                            font-size: 32px;
                            font-weight: 700;
                        }
                        .header p {
                            color: rgba(255,255,255,0.9);
                            margin: 10px 0 0 0;
                            font-size: 16px;
                        }
                        .content { 
                            padding: 40px 30px;
                        }
                        .greeting {
                            font-size: 18px;
                            color: #000;
                            margin-bottom: 20px;
                        }
                        .booking-details { 
                            background: #f9fafb; 
                            padding: 25px; 
                            border-radius: 10px; 
                            margin: 25px 0;
                            border: 1px solid #e5e7eb;
                        }
                        .booking-details h3 {
                            margin: 0 0 20px 0;
                            color: #111827;
                            font-size: 20px;
                            font-weight: 600;
                        }
                        .detail-row { 
                            display: flex; 
                            justify-content: space-between; 
                            padding: 12px 0; 
                            border-bottom: 1px solid #e5e7eb;
                        }
                        .detail-row:last-child { 
                            border-bottom: none; 
                        }
                        .label { 
                            color: #6b7280; 
                            font-weight: 500;
                            font-size: 14px;
                        }
                        .value { 
                            color: #111827; 
                            font-weight: 600;
                            text-align: right;
                            font-size: 14px;
                        }
                        .status-pending {
                            background: #fef3c7;
                            color: #92400e;
                            padding: 8px 16px;
                            border-radius: 20px;
                            font-size: 13px;
                            font-weight: 600;
                            display: inline-block;
                        }
                        .price-highlight {
                            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                            padding: 20px;
                            border-radius: 10px;
                            text-align: center;
                            margin: 25px 0;
                            border: 2px solid #fbbf24;
                        }
                        .price-highlight .label {
                            color: #92400e;
                            font-size: 14px;
                            margin-bottom: 5px;
                        }
                        .price-highlight .value {
                            color: #78350f;
                            font-size: 32px;
                            font-weight: 700;
                        }
                        .cta-button { 
                            display: inline-block; 
                            background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                            color: #ffffff !important; 
                            padding: 16px 40px; 
                            text-decoration: none; 
                            border-radius: 8px; 
                            font-weight: 600;
                            font-size: 16px;
                            margin: 20px 0;
                            box-shadow: 0 4px 6px rgba(217, 119, 6, 0.3);
                            transition: all 0.3s ease;
                        }
                        .cta-button:hover {
                            box-shadow: 0 6px 12px rgba(217, 119, 6, 0.4);
                            transform: translateY(-2px);
                        }
                        .whatsapp-button {
                            display: inline-block;
                            background: #25D366;
                            color: #ffffff !important;
                            padding: 14px 32px;
                            text-decoration: none;
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 15px;
                            margin: 10px 0;
                        }
                        .info-box {
                            background: #eff6ff;
                            border-left: 4px solid #3b82f6;
                            padding: 16px 20px;
                            margin: 20px 0;
                            border-radius: 4px;
                        }
                        .info-box p {
                            margin: 0;
                            color: #1e40af;
                            font-size: 14px;
                        }
                        .footer { 
                            background: #f9fafb; 
                            padding: 30px; 
                            text-align: center;
                            border-top: 1px solid #e5e7eb;
                        }
                        .footer p {
                            margin: 5px 0;
                            color: #6b7280;
                            font-size: 14px;
                        }
                        .footer strong {
                            color: #111827;
                        }
                        @media only screen and (max-width: 600px) {
                            .container {
                                margin: 0;
                                border-radius: 0;
                            }
                            .content {
                                padding: 30px 20px;
                            }
                            .detail-row {
                                flex-direction: column;
                                gap: 5px;
                            }
                            .value {
                                text-align: left;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚗 Booking Received!</h1>
                            <p>We're preparing your journey</p>
                        </div>
                        
                        <div class="content">
                            <p class="greeting">Dear <strong>${booking.customer_name}</strong>,</p>
                            
                            <p style="color: #4b5563; font-size: 15px; line-height: 1.6;">
                                Thank you for choosing Umrah Taxi! Your booking request has been received and is being processed.
                            </p>
                            
                            <div class="booking-details">
                                <h3>📋 Booking Details</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Booking ID</span>
                                    <span class="value">#${booking.id.slice(0, 8).toUpperCase()}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Pickup Location</span>
                                    <span class="value">${booking.pickup_location}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Destination</span>
                                    <span class="value">${booking.destination}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Date & Time</span>
                                    <span class="value">${booking.pickup_date} at ${booking.pickup_time}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Vehicle</span>
                                    <span class="value">${booking.vehicle_type}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Passengers</span>
                                    <span class="value">${booking.passengers || 1} passenger${booking.passengers > 1 ? 's' : ''}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Status</span>
                                    <span class="value"><span class="status-pending">⏳ Pending Confirmation</span></span>
                                </div>
                            </div>
                            
                            ${price ? `
                            <div class="price-highlight">
                                <div class="label">💰 Estimated Price</div>
                                <div class="value">SAR ${price}</div>
                            </div>
                            ` : ''}
                            
                            ${confirmationUrl ? `
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="${confirmationUrl}" class="cta-button">
                                    ✅ Confirm Your Booking
                                </a>
                                <p style="color: #6b7280; font-size: 13px; margin-top: 10px;">
                                    Click the button above to confirm your booking
                                </p>
                            </div>
                            ` : ''}
                            
                            <div class="info-box">
                                <p><strong>📞 What's Next?</strong></p>
                                <p style="margin-top: 8px;">Our team will contact you shortly on <strong>${booking.customer_phone}</strong> to confirm the final details.</p>
                            </div>
                            
                            <p style="margin-top: 30px; font-size: 14px; color: #6b7280; text-align: center;">
                                Need help? Email us at <a href="mailto:umrahtaxi22@gmail.com" style="color: #d97706; text-decoration: none; font-weight: 600;">umrahtaxi22@gmail.com</a>
                            </p>
                        </div>
                        
                        <div class="footer">
                            <p><strong>Umrah Taxi</strong></p>
                            <p>Premium Umrah & Hajj Transport Services</p>
                            <p>Jeddah | Makkah | Madinah</p>
                            <p style="margin-top: 15px; font-size: 12px;">
                                © ${new Date().getFullYear()} Umrah Taxi. All rights reserved.
                            </p>
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
                throw new Error(`Email domain not verified. Please verify 'umrahtaxi.site' in Resend dashboard. Error: ${customerEmailError.message}`);
            }

            throw new Error(`Customer email failed: ${customerEmailError.message}`);
        }

        // Send email to admin
        let adminEmailResult;
        try {
            console.log('Sending admin email to:', adminEmail);
            adminEmailResult = await resend.emails.send({
                from: 'Umrah Taxi System <system@umrahtaxi.site>',
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
