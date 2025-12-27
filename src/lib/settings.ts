import { supabase } from "./supabase";

export async function getSiteSettings() {
  const { data, error } = await supabase.from("site_settings").select("key, value");
  if (error) return {};
  
  const settings: Record<string, string> = {};
  data.forEach((item) => {
    settings[item.key] = item.value;
  });
  return settings;
}
