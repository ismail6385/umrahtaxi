-- ============================================
-- ADD MISSING COLUMNS TO EXISTING BOOKINGS TABLE
-- Run this if you get "column does not exist" error
-- ============================================

-- Add confirmation_token column if it doesn't exist
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS confirmation_token TEXT UNIQUE;

-- Add confirmed_at column if it doesn't exist
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMP WITH TIME ZONE;

-- Create index on confirmation_token for faster lookups
CREATE INDEX IF NOT EXISTS idx_bookings_confirmation_token ON public.bookings(confirmation_token);

-- ============================================
-- DONE! Now your booking form will work!
-- ============================================
