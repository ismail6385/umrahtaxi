# ✅ QUICK FIX - Add Missing Columns

## 🎯 You Got This Error:
```
ERROR: 42703: column "confirmation_token" does not exist
```

## ✅ Solution (30 seconds):

### Step 1: Open Supabase SQL Editor
1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**

### Step 2: Copy & Run This
Open file: **`ADD_MISSING_COLUMNS.sql`**

Copy this:
```sql
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS confirmation_token TEXT UNIQUE;

ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS confirmed_at TIMESTAMP WITH TIME ZONE;

CREATE INDEX IF NOT EXISTS idx_bookings_confirmation_token ON public.bookings(confirmation_token);
```

### Step 3: Paste & Run
1. Paste in SQL Editor
2. Click **RUN** (or Ctrl+Enter)
3. ✅ Done!

---

## 🎉 After Running:

✅ Booking form will work
✅ Confirmation emails will have button
✅ Users can confirm bookings
✅ No more errors!

---

## 🔍 Verify It Worked:

1. Go to **Table Editor** → **bookings**
2. You should see new columns:
   - `confirmation_token`
   - `confirmed_at`

---

## 🚀 Test the Form:

1. Go to http://localhost:3000
2. Fill booking form
3. Submit
4. ✅ Should work now!

---

**That's it! Just 3 lines of SQL!** 🎯
