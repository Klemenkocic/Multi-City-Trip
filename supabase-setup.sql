-- Create form_submissions table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS form_submissions (
  id BIGSERIAL PRIMARY KEY,
  email TEXT,
  home_country TEXT,
  next_destination TEXT,
  travel_month TEXT,
  budget TEXT,
  cities TEXT,
  start_date DATE,
  end_date DATE,
  travelers TEXT,
  include_flights BOOLEAN DEFAULT false,
  include_hotels BOOLEAN DEFAULT false,
  include_trains BOOLEAN DEFAULT false,
  include_activities BOOLEAN DEFAULT false,
  form_type TEXT NOT NULL CHECK (form_type IN ('early-access', 'booking-flow')),
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);

-- Create index on form_type for filtering
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (you'll need to authenticate to view)
-- For now, we'll allow public reads for your use case, but you can restrict this later
CREATE POLICY "Allow public reads" ON form_submissions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Optional: Create a view for early access submissions
CREATE OR REPLACE VIEW early_access_submissions AS
SELECT 
  id,
  email,
  home_country,
  next_destination,
  travel_month,
  budget,
  submitted_at,
  created_at
FROM form_submissions
WHERE form_type = 'early-access'
ORDER BY submitted_at DESC;

-- Optional: Create a view for booking flow submissions
CREATE OR REPLACE VIEW booking_flow_submissions AS
SELECT 
  id,
  email,
  cities,
  start_date,
  end_date,
  travelers,
  include_flights,
  include_hotels,
  include_trains,
  include_activities,
  submitted_at,
  created_at
FROM form_submissions
WHERE form_type = 'booking-flow'
ORDER BY submitted_at DESC;

