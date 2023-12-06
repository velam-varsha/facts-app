
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://sfcqkjuyrisdgfuwomss.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmY3FranV5cmlzZGdmdXdvbXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODQ0NDIsImV4cCI6MjAxNTU2MDQ0Mn0.EZj7Tv1GJgoADli0v5C7O2I-BmiXIRNuwHxnFdnTErw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;