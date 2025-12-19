# Supabase Bookings Table Setup Guide

## Quick Setup Steps:

### Option 1: Using Supabase Dashboard (Recommended)

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project: `gsrjgzhceulpbhkwfjhd`

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Migration**
   - Copy the entire content from `supabase/migrations/create_bookings_table.sql`
   - Paste it into the SQL Editor
   - Click "Run" button

4. **Verify Table Creation**
   - Go to "Table Editor" in the left sidebar
   - You should see the `bookings` table listed
   - Click on it to see the columns

### Option 2: Using Supabase CLI (If you have it installed)

```bash
# Make sure you're in the project directory
cd d:\umrahtaxi

# Login to Supabase (if not already logged in)
supabase login

# Link your project
supabase link --project-ref gsrjgzhceulpbhkwfjhd

# Run the migration
supabase db push
```

## What the Migration Creates:

✅ **bookings table** with columns:
- id (UUID, primary key)
- customer_name, customer_email, customer_phone
- pickup_location, destination
- pickup_date, pickup_time
- vehicle_type, vehicle_image
- passengers, luggage
- special_requests
- status (pending/confirmed/cancelled/completed)
- created_at, updated_at (auto-managed)

✅ **Indexes** for better performance
✅ **Row Level Security (RLS)** enabled
✅ **Policies** to allow operations
✅ **Triggers** for automatic timestamp updates

## After Setup:

Once the table is created, your booking form will work perfectly! The form will:
1. Save bookings to Supabase
2. Send confirmation emails to customers
3. Send notification emails to admin

## Troubleshooting:

If you get any errors:
- Make sure you're using the correct Supabase project
- Check that your environment variables are set correctly in `.env.local`
- Verify RLS policies are enabled

---

**Need Help?** Let me know if you encounter any issues!
