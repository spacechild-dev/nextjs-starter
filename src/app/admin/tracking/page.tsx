"use client";

import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Column,
  Row,
  Line,
  useToast,
} from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminTrackingPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>({
    ga4_id: "",
    gtm_id: "",
    meta_pixel_id: "",
    meta_capi_token: "",
    search_console_id: "",
    gtm_server_url: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("site_settings").select("key, value");
    if (error) {
      addToast({ message: "Ayarlar yüklenemedi.", variant: "danger" });
    } else {
      const settingsMap: Record<string, string> = {};
      data.forEach((item) => {
        settingsMap[item.key] = item.value;
      });
      setSettings((prev) => ({ ...prev, ...settingsMap }));
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const updates = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
    }));

    const { error } = await supabase.from("site_settings").upsert(updates, { onConflict: "key" });

    if (error) {
      addToast({ message: "Hata oluştu.", variant: "danger" });
    } else {
      addToast({ message: "Tüm ayarlar başarıyla kaydedildi.", variant: "success" });
    }
    setSaving(false);
  };

  if (loading) return <Text padding="48">Yükleniyor...</Text>;

  return (
    <Column fillWidth padding="48" gap="32">
      <Row horizontal="between" vertical="center" fillWidth>
        <Row vertical="center" gap="12">
          <Button variant="tertiary" size="s" prefixIcon="chevronLeft" onClick={() => router.push("/admin/dashboard")} />
          <Heading variant="display-strong-s">Takip Araçları</Heading>
        </Row>
        <Button variant="primary" size="s" loading={saving} onClick={handleSave}>Kaydet</Button>
      </Row>

      <Line background="neutral-alpha-weak" />

      <Row gap="32" wrap>
        <Column flex={1} gap="24" style={{ minWidth: '320px' }}>
          <Heading variant="heading-strong-l">Google Stack</Heading>
          <Input id="ga4_id" label="GA4 ID" value={settings.ga4_id} onChange={(e) => setSettings({ ...settings, ga4_id: e.target.value })} />
          <Input id="gtm_id" label="GTM ID" value={settings.gtm_id} onChange={(e) => setSettings({ ...settings, gtm_id: e.target.value })} />
          <Input id="gtm_server_url" label="GTM Server URL" value={settings.gtm_server_url} onChange={(e) => setSettings({ ...settings, gtm_server_url: e.target.value })} />
        </Column>
        <Column flex={1} gap="24" style={{ minWidth: '320px' }}>
          <Heading variant="heading-strong-l">Meta</Heading>
          <Input id="meta_pixel_id" label="Meta Pixel ID" value={settings.meta_pixel_id} onChange={(e) => setSettings({ ...settings, meta_pixel_id: e.target.value })} />
          <Input id="meta_capi_token" label="CAPI Token" value={settings.meta_capi_token} onChange={(e) => setSettings({ ...settings, meta_capi_token: e.target.value })} />
        </Column>
      </Row>
    </Column>
  );
}
