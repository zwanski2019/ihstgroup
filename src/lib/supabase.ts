
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihsgroup.supabase.co';
const supabaseKey = 'sbp_236557b18d2edaac2dbb026f7825ba3ec10cc456';

export const supabase = createClient(supabaseUrl, supabaseKey);
