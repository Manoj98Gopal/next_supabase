import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://exyjssgnvkwtalpikkiw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eWpzc2dudmt3dGFscGlra2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMDc3MjUsImV4cCI6MjA0MDU4MzcyNX0.BQynUcuMm34NqTBPnPNPU8qvxbzXAtLbeALlGU41beE";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
