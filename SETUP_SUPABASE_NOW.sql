-- ============================================
-- UMRAH TAXI BOOKINGS TABLE SETUP
-- Copy this ENTIRE file and paste in Supabase SQL Editor
-- ============================================

-- Step 1: Create the bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    pickup_location TEXT NOT NULL,
    destination TEXT NOT NULL,
    pickup_date DATE NOT NULL,
    pickup_time TIME NOT NULL,
    vehicle_type TEXT NOT NULL,
    vehicle_image TEXT,
    passengers INTEGER NOT NULL DEFAULT 1,
    luggage INTEGER NOT NULL DEFAULT 0,
    special_requests TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    confirmation_token TEXT UNIQUE,
    confirmed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Step 2: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_customer_email ON public.bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_confirmation_token ON public.bookings(confirmation_token);

-- Step 3: Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow all operations on bookings" ON public.bookings;

-- Step 5: Create policy to allow all operations
CREATE POLICY "Allow all operations on bookings" ON public.bookings
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Step 6: Create function for auto-updating updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 7: Drop existing trigger if it exists
DROP TRIGGER IF EXISTS set_updated_at ON public.bookings;

-- Step 8: Create trigger
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.bookings
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Step 9: Grant permissions
GRANT ALL ON public.bookings TO anon;
GRANT ALL ON public.bookings TO authenticated;

-- ============================================
-- SETUP COMPLETE!
-- You can now use the booking form
-- ============================================
