-- Create the orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_name TEXT,
  business_type TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending'::text
);

-- Enable Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy to allow anonymous users to insert orders
CREATE POLICY "Enable insertions for everyone"
ON orders FOR INSERT
WITH CHECK (true);

-- Policy to allow admins (or authenticated users manually) to view orders
-- Ideally, you'd set up Auth, but for this demo/MVP, we'll allow public read if needed or just use anon key with select policy
CREATE POLICY "Enable read for everyone"
ON orders FOR SELECT
USING (true);

-- Policy to allow updates (for admin to confirm)
CREATE POLICY "Enable update for everyone"
ON orders FOR UPDATE
USING (true);
