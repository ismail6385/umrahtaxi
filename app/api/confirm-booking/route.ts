import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json(
                { error: 'Confirmation token is required' },
                { status: 400 }
            );
        }

        // Find booking by confirmation token
        const { data: booking, error: fetchError } = await supabase
            .from('bookings')
            .select('*')
            .eq('confirmation_token', token)
            .single();

        if (fetchError || !booking) {
            return NextResponse.json(
                { error: 'Invalid or expired confirmation link' },
                { status: 404 }
            );
        }

        // Check if already confirmed
        if (booking.status === 'confirmed') {
            return NextResponse.redirect(
                new URL(`/booking-confirmed?already=true&id=${booking.id}`, request.url)
            );
        }

        // Update booking status to confirmed
        const { error: updateError } = await supabase
            .from('bookings')
            .update({
                status: 'confirmed',
                confirmed_at: new Date().toISOString()
            })
            .eq('confirmation_token', token);

        if (updateError) {
            throw updateError;
        }

        // Send confirmation email to customer
        try {
            await fetch(new URL('/api/send-confirmation-email', request.url).toString(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ booking })
            });
        } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError);
        }

        // Redirect to success page
        return NextResponse.redirect(
            new URL(`/booking-confirmed?id=${booking.id}`, request.url)
        );

    } catch (error) {
        console.error('Booking confirmation error:', error);
        return NextResponse.json(
            { error: 'Failed to confirm booking' },
            { status: 500 }
        );
    }
}
