import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
    try {
        const { booking } = await request.json();

        if (!booking) {
            return NextResponse.json(
                { error: 'Missing booking data' },
                { status: 400 }
            );
        }

        if (!resend) {
            console.error('Resend not initialized');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Send confirmation email to customer
        const emailResult = await resend.emails.send({
            from: 'Umrah Taxi <bookings@umrahtaxi.site>',
            to: [booking.customer_email],
            subject: `✅ Booking Confirmed - Umrah Taxi (#${booking.id.slice(0, 8)})`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #d97706 0%, #b45309 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .header h1 { color: #fff; margin: 0; font-size: 28px; }
                    .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                    .success-badge { background: #10b981; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; font-weight: bold; }
                    .booking-details { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                    .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
                    .detail-row:last-child { border-bottom: none; }
                    .label { color: #666; font-weight: 600; }
                    .value { color: #000; font-weight: bold; }
                    .footer { background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #666; }
                    .button { display: inline-block; background: #d97706; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>✅ Booking Confirmed!</h1>
                    </div>
                    <div class="content">
                        <div class="success-badge">
                            🎉 Your booking has been successfully confirmed!
                        </div>
                        
                        <p>Dear <strong>${booking.customer_name}</strong>,</p>
                        <p>Great news! Your Umrah Taxi booking is now confirmed and ready.</p>
                        
                        <div class="booking-details">
                            <h3 style="margin-top: 0; color: #000;">Confirmed Booking Details</h3>
                            
                            <div class="detail-row">
                                <span class="label">Booking ID:</span>
                                <span class="value">#${booking.id.slice(0, 8).toUpperCase()}</span>
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
                            
                            <div class="detail-row">
                                <span class="label">Status:</span>
                                <span class="value" style="color: #10b981;">✓ CONFIRMED</span>
                            </div>
                        </div>
                        
                        <h3 style="color: #000;">What Happens Next?</h3>
                        <ul style="color: #666;">
                            <li>Our team will contact you 24 hours before your pickup</li>
                            <li>You will receive driver details and vehicle information</li>
                            <li>Your driver will arrive at the scheduled time</li>
                        </ul>
                        
                        
                        <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
                            If you have any questions, feel free to reach out to us at <a href="mailto:umrahtaxi22@gmail.com" style="color: #d97706; text-decoration: none; font-weight: 600;">umrahtaxi22@gmail.com</a>
                        </p>
                    </div>
                    <div class="footer">
                        <p><strong>Umrah Taxi</strong></p>
                        <p>Premium Umrah & Hajj Transport Services</p>
                        <p>Jeddah | Makkah | Madinah</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        });

        return NextResponse.json({ success: true, emailResult });
    } catch (error: any) {
        console.error('Confirmation email error:', error);
        return NextResponse.json(
            { error: 'Failed to send confirmation email', details: error.message },
            { status: 500 }
        );
    }
}
