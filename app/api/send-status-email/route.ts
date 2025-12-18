import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const TRUSTPILOT_LINK = 'https://www.trustpilot.com/review/taxiserviceksa.com'; // Replace with actual link

if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { bookingId, status, customerEmail, customerName } = body;

        if (!bookingId || !status || !customerEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!resend) {
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        let subject = '';
        let htmlContent = '';

        const commonStyle = `
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { padding: 30px; text-center; border-radius: 10px 10px 0 0; }
            .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .highlight { color: #000; font-weight: bold; }
        `;

        switch (status) {
            case 'confirmed':
                subject = '✅ Booking Confirmed - Umrah Taxi';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head><style>${commonStyle} .header { background: #047857; color: white; } .button { background: #D4AF37; color: #000; } </style></head>
                    <body>
                        <div class="container">
                            <div class="header"><h1>Booking Confirmed!</h1></div>
                            <div class="content">
                                <p>Dear <strong>${customerName}</strong>,</p>
                                <p>Great news! Your booking <strong>#${bookingId.slice(0, 8)}</strong> has been fully confirmed by our team.</p>
                                <p>Your driver will meet you at the scheduled time and location.</p>
                                <p>If you need any assistance, simply reply to this email or contact us via WhatsApp.</p>
                                <center><a href="https://umrahtaxi.site/contact" class="button">Contact Support</a></center>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            case 'cancelled':
                subject = '❌ Booking Cancelled - Umrah Taxi';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head><style>${commonStyle} .header { background: #ef4444; color: white; } </style></head>
                    <body>
                        <div class="container">
                            <div class="header"><h1>Booking Cancelled</h1></div>
                            <div class="content">
                                <p>Dear <strong>${customerName}</strong>,</p>
                                <p>Your booking <strong>#${bookingId.slice(0, 8)}</strong> has been cancelled.</p>
                                <p>If this was a mistake or you wish to rebook, please visit our website.</p>
                                <center><a href="https://umrahtaxi.site" class="button" style="background: #000; color: #fff;">Book Again</a></center>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            case 'completed':
                subject = '🌟 How was your ride? - Umrah Taxi';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head><style>${commonStyle} .header { background: #047857; color: white; } .button { background: #D4AF37; color: #000; } </style></head>
                    <body>
                        <div class="container">
                            <div class="header"><h1>Journey Completed</h1></div>
                            <div class="content">
                                <p>Dear <strong>${customerName}</strong>,</p>
                                <p>We hope you had a pleasant journey and a blessed Umrah!</p>
                                <p>Your feedback helps us improve. If you enjoyed our service, please consider leaving us a review.</p>
                                <p style="font-size: 14px; color: #666; text-align: center;">Thank you for choosing Umrah Taxi.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            default:
                return NextResponse.json({ message: 'No email sent for this status' });
        }

        console.log(`Sending ${status} email to ${customerEmail}`);

        const data = await resend.emails.send({
            from: 'Umrah Taxi <bookings@umrahtaxi.site>',
            to: [customerEmail],
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        console.error('Error sending status email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
