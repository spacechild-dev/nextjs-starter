"use client";

import React from "react";
import { Heading, Text, Column, Flex, Row, Line, InlineCode, Button } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";
import { Timeline } from "@/components/Timeline";

export default function Career2Page() {
  const { language, t } = useLanguage();

  const formatDuration = (start: Date, end: Date = new Date()) => {
    const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years >= 1) {
      const yearStr = years === 1 ? (language === "tr" ? "yıl" : "year") : (language === "tr" ? "yıl" : "years");
      const monthStr = months > 0 ? ` ${months} ${language === "tr" ? "ay" : "months"}` : "";
      return `${years} ${yearStr}${monthStr}`;
    }
    return `${totalMonths < 1 ? 1 : totalMonths} ${language === "tr" ? "ay" : "months"}`;
  };

  const optdomStart = new Date(2025, 9);
  const roipublicStart = new Date(2024, 1);
  const roipublicEnd = new Date(2025, 9);
  const profajStart = new Date(2022, 1);
  const profajEnd = new Date(2024, 1);

  const optdomDuration = formatDuration(optdomStart);
  const roipublicDuration = formatDuration(roipublicStart, roipublicEnd);
  const profajDuration = formatDuration(profajStart, profajEnd);

  const DurationBadge = ({ children }: { children: React.ReactNode }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--brand-on-background-medium)",
        border: "1px solid var(--brand-alpha-weak)",
        backgroundColor: "var(--brand-alpha-weak)",
        borderRadius: "var(--radius-s)",
        padding: "0px 6px",
        fontSize: "10px",
        fontWeight: 600,
        height: "18px",
        whiteSpace: "nowrap",
        marginLeft: "8px",
        fontFamily: 'var(--font-code)'
      }}
    >
      {children}
    </span>
  );

  return (
    <Column
      fillWidth
      horizontal="center"
      paddingY="128"
      paddingX="l"
      style={{ minHeight: "100vh" }}
    >
      <Column maxWidth="s" fillWidth gap="48">
        <Column gap="16">
          <Heading variant="display-strong-s">{t("career.title")} (Timeline)</Heading>
          <Text variant="heading-default-l" onBackground="neutral-strong">
            {language === "tr"
              ? "Dijital Performans ve Medya Hesap Yöneticisi"
              : "Digital Performance and Media Account Manager"}
          </Text>
        </Column>

        <Column gap="32">
          <Timeline
            items={[
              {
                label: language === "tr" ? "Ekim 2025 — Günümüz" : "Oct 2025 — Present",
                state: "active",
                description: (
                  <Column gap="12">
                    <Row vertical="center">
                      <Heading variant="heading-strong-m" onBackground="brand-strong">OPTDCOM</Heading>
                      <DurationBadge>{optdomDuration}</DurationBadge>
                    </Row>
                    <Text variant="label-strong-m">
                      {language === "tr"
                        ? "Dijital Performans ve Medya Hesap Yöneticisi"
                        : "Digital Performance and Media Account Manager"}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {language === "tr"
                        ? "Birden fazla müşteri ve dikeyde performans ve medya operasyonlarını yönetmek. Performans pazarlama iş akışları için strateji ve uygulama koordinasyonu sağlamak."
                        : "Managing performance and media operations across multiple clients and verticals. Coordinating strategy and execution for performance marketing workflows."}
                    </Text>
                  </Column>
                )
              },
              {
                label: language === "tr" ? "Şubat 2024 — Ekim 2025" : "Feb 2024 — Oct 2025",
                state: "completed",
                description: (
                  <Column gap="16">
                    <Row vertical="center">
                      <Heading variant="heading-strong-m" onBackground="brand-strong">ROIPUBLIC</Heading>
                      <DurationBadge>{roipublicDuration}</DurationBadge>
                    </Row>
                    <Column gap="12">
                      <Column gap="4">
                        <Text variant="label-strong-m">
                          {language === "tr"
                            ? "Performans Pazarlama Ekip Lideri"
                            : "Performance Marketing Team Lead"}
                        </Text>
                        <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
                          {language === "tr" ? "Kasım 2024 – Ekim 2025" : "Nov 2024 – Oct 2025"}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {language === "tr"
                            ? "Altı kişilik bir ekibe liderlik ederek performans pazarlama uygulamasını yönetmek. Çok platformlu kampanyaları yönetmek ve medya bütçelerini optimize etmek."
                            : "Led a team of six with focus on performance marketing execution. Managed multi-platform campaigns and optimized media budgets."}
                        </Text>
                      </Column>
                      <Column gap="4">
                        <Text variant="label-strong-m">
                          {language === "tr"
                            ? "Sr. Performans Pazarlama Uzmanı"
                            : "Sr. Performance Marketing Executive"}
                        </Text>
                        <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
                          {language === "tr" ? "Şubat 2024 – Ekim 2024" : "Feb 2024 – Oct 2024"}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {language === "tr"
                            ? "Performans platformlarında uçtan uca kampanya yürütme ve raporlama sorumluluğu. Genç ekip üyelerine ilk günden itibaren mentorluk ve pratik rehberlik sağlama."
                            : "Owned end-to-end campaign execution and reporting across performance platforms. Provided mentorship and hands-on guidance to junior team members."}
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                )
              },
              {
                label: language === "tr" ? "Şubat 2022 — Şubat 2024" : "Feb 2022 — Feb 2024",
                state: "completed",
                description: (
                  <Column gap="16">
                    <Row vertical="center">
                      <Heading variant="heading-strong-m" onBackground="brand-strong">PROFAJ</Heading>
                      <DurationBadge>{profajDuration}</DurationBadge>
                    </Row>
                    <Column gap="12">
                      <Column gap="4">
                        <Text variant="label-strong-m">
                          {language === "tr"
                            ? "Dijital Pazarlama Ekip Lideri"
                            : "Digital Marketing Team Lead"}
                        </Text>
                        <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
                          {language === "tr" ? "Nisan 2023 – Şubat 2024" : "Apr 2023 – Feb 2024"}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {language === "tr"
                            ? "Beş kişilik pazarlama ekibi için stratejik yönlendirme sağlama. Performans, büyüme ve operasyonel destek odaklı görüşmeleri yönetme."
                            : "Provided strategic direction for a five-person marketing team. Facilitated 1:1s focused on performance, growth, and operational support."}
                        </Text>
                      </Column>
                      <Column gap="4">
                        <Text variant="label-strong-m">
                          {language === "tr"
                            ? "Dijital Performans Uzmanı"
                            : "Digital Performance Specialist"}
                        </Text>
                        <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
                          {language === "tr" ? "Şubat 2022 – Mart 2023" : "Feb 2022 – Mar 2023"}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {language === "tr"
                            ? "Performans pazarlama temelleri, kampanya yönetimi ve veri analitiği süreçlerinin yönetimi."
                            : "Managing performance marketing fundamentals, campaign management, and data analytics processes."}
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                )
              }
            ]}
          />
        </Column>

        <Button href="/resume" variant="tertiary" size="s" prefixIcon="chevronLeft">
          Back to Standard Resume
        </Button>
      </Column>
    </Column>
  );
}
