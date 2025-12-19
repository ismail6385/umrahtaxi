# 🚨 URGENT: Supabase Setup Required

## ❌ Current Error:
```
Failed to load resource: the server responded with a status of 400
```

**Reason:** The `bookings` table doesn't exist in Supabase yet!

---

## ✅ Fix in 3 Minutes:

### Step 1: Open Supabase Dashboard
1. Go to: **https://supabase.com/dashboard**
2. Click on your project: `gsrjgzhceulpbhkwfjhd`

### Step 2: Open SQL Editor
1. Click **"SQL Editor"** in the left sidebar (database icon)
2. Click **"New Query"** button (top right)

### Step 3: Run the Setup Script
1. Open the file: `SETUP_SUPABASE_NOW.sql` (in your project root)
2. **Copy ALL the content** (Ctrl+A, Ctrl+C)
3. **Paste** into the SQL Editor
4. Click **"Run"** button (or press Ctrl+Enter)

### Step 4: Verify
1. Click **"Table Editor"** in left sidebar
2. You should see **"bookings"** table
3. Click on it to see all columns

---

## 📋 What the Script Creates:

✅ `bookings` table with all required columns
✅ Indexes for fast queries
✅ Row Level Security (RLS) enabled
✅ Policies for data access
✅ Auto-update triggers
✅ Proper permissions

---

## 🎯 After Running the Script:

1. ✅ Booking form will work
2. ✅ Data will save to Supabase
3. ✅ Emails will be sent
4. ✅ Confirmation system will work
5. ✅ No more 400 errors!

---

## 🔍 Troubleshooting:

**If you get an error:**
- Make sure you're in the correct project
- Try running the script again
- Check if the table already exists (Table Editor)

**If table already exists but missing columns:**
Run this to add the missing column:
```sql
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS confirmation_token TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMP WITH TIME ZONE;
```

---

## 📞 Need Help?

If you're stuck:
1. Take a screenshot of the error
2. Check the Supabase logs
3. Verify your environment variables in `.env.local`

---

**⏰ This will take less than 3 minutes!**

**Just copy `SETUP_SUPABASE_NOW.sql` → Paste in SQL Editor → Run!** 🚀
