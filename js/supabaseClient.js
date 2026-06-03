// js/supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://kczpfgpfnkopdsdfkgde.supabase.co' 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjenBmZ3BmbmtvcGRzZGZrZ2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDQ1MTMsImV4cCI6MjA5NTI4MDUxM30.yz6SAi7LA2XfRcJN1ssCN0tCzkcP5pWKo8tN0OV_QAc' 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,    // Token apne aap refresh hoga
    persistSession: true,      // Browser band karne pe bhi login rahega
    detectSessionInUrl: true   // Email verify links ke liye
  }
})