"use client";

import React from "react";
import { Heading, Text, Column, Flex, Row, Line, Button } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export default function ResumePage() {
  const { language, t } = useLanguage();

  const calculateDuration = (start: Date, end: Date = new Date()) => {
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return months < 1 ? 1 : months;
  };

  const optdomStart = new Date(2025, 9); // Oct 2025 (months are 0-indexed)
  const roipublicStart = new Date(2024, 1); // Feb 2024
  const roipublicEnd = new Date(2025, 9); // Oct 2025
  const profajStart = new Date(2022, 1); // Feb 2022 (Başlangıç Şubat)
  const profajEnd = new Date(2024, 1); // Feb 2024

  const optdomDuration = calculateDuration(optdomStart);
  const roipublicDuration = calculateDuration(roipublicStart, roipublicEnd);
  const profajDuration = calculateDuration(profajStart, profajEnd);

  return (
    <Column
      fillWidth
      horizontal="center"
      paddingY="128"
      paddingX="l"
      style={{ minHeight: "100vh" }}
    >
      <Column maxWidth="s" fillWidth gap="48">
        {/* Header */}
        <Column gap="16">
          <Heading variant="display-strong-s">{t("career.title")}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-strong">
            {language === "tr"
              ? "Dijital Performans ve Medya Hesap Yöneticisi"
              : "Digital Performance and Media Account Manager"}
          </Text>
          <Flex gap="12" wrap vertical="center">
            <Text variant="body-default-s" onBackground="neutral-weak">
              hello@dagkanbayramoglu.com
            </Text>
            <Line vert background="neutral-alpha-weak" height="12" />
            <Button href="https://github.com/spacechild-dev" variant="tertiary" size="s">
              GitHub
            </Button>
            <Line vert background="neutral-alpha-weak" height="12" />
            <Button href="https://linkedin.com/in/dagkanbayramoglu" variant="tertiary" size="s">
              LinkedIn
            </Button>
          </Flex>
        </Column>

        {/* Professional Summary */}
        <Column gap="16">
          <Heading variant="heading-strong-l">{t("career.summaryTitle")}</Heading>
          <Line background="neutral-alpha-weak" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            {language === "tr"
              ? "Performans pazarlaması, ekip liderliği ve stratejik kampanya yönetimi konularında geniş deneyime sahip, sonuç odaklı Dijital Pazarlama profesyoneli. Yatırım getirisini (ROI) artırma, medya bütçelerini optimize etme ve iş büyümesini sağlamak için ekipler arası koordinasyon kurma konularında uzman."
              : "Highly accomplished and results-driven Digital Marketing professional with extensive experience in performance marketing, team leadership, and strategic campaign management. Proven ability to drive ROI, optimize media budgets, and coordinate cross-functional teams."}
          </Text>
        </Column>

        {/* Experience */}
        <Column gap="32">
          <Heading variant="heading-strong-l" id="experience">
            {t("career.experienceTitle")}
          </Heading>
          <Line background="neutral-alpha-weak" />

          {/* OPTDCOM */}
          <Column gap="16">
            <Row horizontal="between" vertical="center" wrap>
              <Heading variant="heading-strong-m" onBackground="brand-strong">
                OPTDCOM
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {language === "tr" ? "Ekim 2025" : "Oct 2025"} – {t("career.present")} ({optdomDuration} {language === "tr" ? "ay" : "mos"})
              </Text>
            </Row>
            <Column
              paddingLeft="24"
              style={{ borderLeft: "2px solid var(--neutral-alpha-weak)" }}
              gap="8"
            >
              <Row horizontal="between" vertical="start">
                <Text variant="label-strong-m">
                  {language === "tr"
                    ? "Dijital Performans ve Medya Hesap Yöneticisi"
                    : "Digital Performance and Media Account Manager"}
                </Text>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {language === "tr"
                  ? "Birden fazla müşteri ve dikeyde performans ve medya operasyonlarını yönetmek. Performans pazarlama iş akışları için strateji ve uygulama koordinasyonu sağlamak."
                  : "Managing performance and media operations across multiple clients and verticals. Coordinating strategy and execution for performance marketing workflows."}
              </Text>
            </Column>
          </Column>

          {/* ROIPUBLIC */}
          <Column gap="16">
            <Row horizontal="between" vertical="center" wrap>
              <Heading variant="heading-strong-m" onBackground="brand-strong">
                ROIPUBLIC
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {language === "tr" ? "Şubat 2024 – Ekim 2025" : "Feb 2024 – Oct 2025"} ({roipublicDuration} {language === "tr" ? "ay" : "mos"})
              </Text>
            </Row>
            <Column
              paddingLeft="24"
              style={{ borderLeft: "2px solid var(--neutral-alpha-weak)" }}
              gap="16"
            >
              <Column gap="4">
                <Row horizontal="between" vertical="start">
                  <Text variant="label-strong-m">
                    {language === "tr"
                      ? "Performans Pazarlama Ekip Lideri"
                      : "Performance Marketing Team Lead"}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {language === "tr" ? "Kasım 2024 – Ekim 2025" : "Nov 2024 – Oct 2025"}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {language === "tr"
                    ? "Altı kişilik bir ekibe liderlik ederek performans pazarlama uygulamasını yönetmek. Çok platformlu kampanyaları yönetmek ve medya bütçelerini optimize etmek."
                    : "Led a team of six with focus on performance marketing execution. Managed multi-platform campaigns and optimized media budgets."}
                </Text>
              </Column>
              <Column gap="4">
                <Row horizontal="between" vertical="start">
                  <Text variant="label-strong-m">
                    {language === "tr"
                      ? "Sr. Performans Pazarlama Uzmanı"
                      : "Sr. Performance Marketing Executive"}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {language === "tr" ? "Şubat 2024 – Ekim 2024" : "Feb 2024 – Oct 2024"}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {language === "tr"
                    ? "Performans platformlarında uçtan uca kampanya yürütme ve raporlama sorumluluğu. Genç ekip üyelerine ilk günden itibaren mentorluk ve pratik rehberlik sağlama."
                    : "Owned end-to-end campaign execution and reporting across performance platforms. Provided mentorship and hands-on guidance to junior team members."}
                </Text>
              </Column>
            </Column>
          </Column>

          {/* PROFAJ */}
          <Column gap="16">
            <Row horizontal="between" vertical="center" wrap>
              <Heading variant="heading-strong-m" onBackground="brand-strong">
                PROFAJ
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {language === "tr" ? "Şubat 2022 – Şubat 2024" : "Feb 2022 – Feb 2024"} ({profajDuration} {language === "tr" ? "ay" : "mos"})
              </Text>
            </Row>
            <Column
              paddingLeft="24"
              style={{ borderLeft: "2px solid var(--neutral-alpha-weak)" }}
              gap="16"
            >
              <Column gap="4">
                <Row horizontal="between" vertical="start">
                  <Text variant="label-strong-m">
                    {language === "tr"
                      ? "Dijital Pazarlama Ekip Lideri"
                      : "Digital Marketing Team Lead"}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {language === "tr" ? "Nisan 2023 – Şubat 2024" : "Apr 2023 – Feb 2024"}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {language === "tr"
                    ? "Beş kişilik pazarlama ekibi için stratejik yönlendirme sağlama. Performans, büyüme ve operasyonel destek odaklı görüşmeleri yönetme."
                    : "Provided strategic direction for a five-person marketing team. Facilitated 1:1s focused on performance, growth, and operational support."}
                </Text>
              </Column>
              <Column gap="4">
                <Row horizontal="between" vertical="start">
                  <Text variant="label-strong-m">
                    {language === "tr"
                      ? "Dijital Performans Uzmanı (İŞKUR Programı Dahil)"
                      : "Digital Performance Specialist (Inc. ISKUR Program)"}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {language === "tr" ? "Şubat 2022 – Mart 2023" : "Feb 2022 – Mar 2023"}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {language === "tr"
                    ? "İŞKUR iş başı eğitim programı ile başlayan süreçte performans pazarlama temelleri ve kampanya yönetimi."
                    : "Performance marketing fundamentals and campaign management, starting with the ISKUR on-the-job training program."}
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>

        {/* Certifications */}
        <Column gap="16" id="certificates">
          <Heading variant="heading-strong-l">{t("nav.certificates")}</Heading>
          <Line background="neutral-alpha-weak" />
          <Row gap="32" wrap>
            <Column gap="8">
              <Text variant="body-default-s">• Criteo Programmatic Manager</Text>
              <Text variant="body-default-s">• Meta Certified Associate</Text>
            </Column>
            <Column gap="8">
              <Text variant="body-default-s">• Google Ads Expert</Text>
              <Text variant="body-default-s">• Apple Search Ads</Text>
            </Column>
          </Row>
        </Column>

        {/* Skills */}
        <Column gap="16">
          <Heading variant="heading-strong-l">{t("career.skillsTitle")}</Heading>
          <Line background="neutral-alpha-weak" />
          <Flex gap="12" wrap>
            {[
              "Google Ads",
              "Meta Ads",
              "TikTok Ads",
              "LinkedIn Ads",
              "GA4",
              "GTM",
              "Server-Side Tracking",
              "Looker Studio",
              "Zapier",
              "Make",
              "n8n",
            ].map((skill) => (
              <Flex
                key={skill}
                paddingX="12"
                paddingY="8"
                radius="m"
                background="surface"
                border="neutral-alpha-weak"
              >
                <Text variant="code-default-xs">{skill}</Text>
              </Flex>
            ))}
          </Flex>
        </Column>
      </Column>
    </Column>
  );
}
