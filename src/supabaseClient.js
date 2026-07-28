// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ubfbimuiabxcyjsqqkzq.supabase.co/';
const supabaseAnonKey = 'sb_publishable_8W0RIwEIkfXdQhLLHSIAIg_j_8WXQHH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);