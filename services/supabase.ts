// ไฟล์ที่ใช้ตั้งค่าการเชื่อมต่อไปยัง Supabase ซึ่งต้องใช้ URL และ KEY ของ Supabase

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://iyokksqjuwnicfogmotg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5b2trc3FqdXduaWNmb2dtb3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NjA4ODgsImV4cCI6MjA5NDUzNjg4OH0.BSfoDk6Mj6vq0NQ06nYCasAxX5F9hbcaNJ4zqLdTlLA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
