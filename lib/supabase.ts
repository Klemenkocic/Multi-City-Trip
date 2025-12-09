import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Form submissions will not be saved.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for form submissions
export interface EarlyAccessSubmission {
  email: string;
  home_country?: string;
  next_destination?: string;
  travel_month?: string;
  budget?: string;
  form_type: 'early-access';
  submitted_at: string;
}

export interface BookingFlowSubmission {
  email?: string;
  cities: string;
  start_date?: string;
  end_date?: string;
  travelers: string;
  include_flights: boolean;
  include_hotels: boolean;
  include_trains: boolean;
  include_activities: boolean;
  form_type: 'booking-flow';
  submitted_at: string;
}

// Save early access form submission
export async function saveEarlyAccessSubmission(data: Omit<EarlyAccessSubmission, 'submitted_at' | 'form_type'>) {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured. Submission not saved.');
    return { success: false, error: 'Database not configured' };
  }

  try {
    const { error } = await supabase
      .from('form_submissions')
      .insert({
        ...data,
        form_type: 'early-access',
        submitted_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error saving submission:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error saving submission:', error);
    return { success: false, error: 'Failed to save submission' };
  }
}

// Save booking flow submission
export async function saveBookingFlowSubmission(data: Omit<BookingFlowSubmission, 'submitted_at' | 'form_type'>) {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured. Submission not saved.');
    return { success: false, error: 'Database not configured' };
  }

  try {
    const { error } = await supabase
      .from('form_submissions')
      .insert({
        ...data,
        form_type: 'booking-flow',
        submitted_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Error saving submission:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error saving submission:', error);
    return { success: false, error: 'Failed to save submission' };
  }
}

