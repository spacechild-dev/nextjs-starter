"use client";

import React from "react";
import { Heading, Text, Column, Flex, Row, Line, InlineCode } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/resources/skills.config";

export default function ResumePage() {
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
        {/* Header */}
        <Column gap="16">
          <Heading variant="display-strong-s">{t("career.title")}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-strong">
            {language === "tr"
              ? "Dijital Performans ve Medya Hesap Yöneticisi"
              : "Digital Performance and Media Account Manager"}
          </Text>
          <Flex gap="8" wrap vertical="center">
            <Text variant="body-default-s" onBackground="neutral-weak">
              hello@dagkanbayramoglu.com
            </Text>
            <Line vert background="neutral-alpha-weak" height="12" marginX="4" />
            <InlineCode>
              <a 
                href="https://github.com/spacechild-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "var(--brand-strong)", textDecoration: "none", fontSize: "11px", padding: "0 2px" }}
              >
                GitHub
              </a>
            </InlineCode>
            <InlineCode>
              <a 
                href="https://linkedin.com/in/dagkanbayramoglu" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "var(--brand-strong)", textDecoration: "none", fontSize: "11px", padding: "0 2px" }}
              >
                LinkedIn
              </a>
            </InlineCode>
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
              <Row vertical="center">
                <Text variant="code-default-xs" onBackground="neutral-weak">
                  {language === "tr" ? "Ekim 2025" : "Oct 2025"} – {t("career.present")}
                </Text>
                <DurationBadge>{optdomDuration}</DurationBadge>
              </Row>
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
              <Row vertical="center">
                <Text variant="code-default-xs" onBackground="neutral-weak">
                  {language === "tr" ? "Şubat 2024 – Ekim 2025" : "Feb 2024 – Oct 2025"}
                </Text>
                <DurationBadge>{roipublicDuration}</DurationBadge>
              </Row>
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
                  <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
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
                  <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
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
              <Row vertical="center">
                <Text variant="code-default-xs" onBackground="neutral-weak">
                  {language === "tr" ? "Şubat 2022 – Şubat 2024" : "Feb 2022 – Feb 2024"}
                </Text>
                <DurationBadge>{profajDuration}</DurationBadge>
              </Row>
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
                  <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
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
                      ? "Dijital Performans Uzmanı"
                      : "Digital Performance Specialist"}
                  </Text>
                  <Text variant="code-default-xs" onBackground="neutral-weak" style={{ opacity: 0.6 }}>
                    {language === "tr" ? "Şubat 2022 – Mart 2023" : "Feb 2022 – Mar 2023"}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {language === "tr"
                    ? "Performans pazarlama temelleri, kampanya yönetimi ve veri analitiği süreçlerinin yönetimi."
                    : "Managing performance marketing fundamentals, campaign management, and data analytics processes."}
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
            <Column gap="12" flex={1}>
              {[
                { name: "Criteo Programmatic Campaign Manager", url: "https://verify.skilljar.com/c/ipwsetzti2ec" },
                { name: "Criteo Programmatic Advertising Professional", url: "https://verify.skilljar.com/c/m8ikenqasaow" },
                { name: "Meta Certified Digital Marketing Associate", url: "https://www.credly.com/badges/254af2d4-ce1e-40b5-8072-93e51fd6bfe9/" },
                { name: "Apple Search Ads", url: "https://certification-searchads.apple.com/certificate/LJ7vY9rDFK" },
              ].map((cert) => (
                <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Text variant="body-default-s" onBackground="neutral-medium" className="hover-reveal">• {cert.name}</Text>
                </a>
              ))}
            </Column>
            <Column gap="12" flex={1}>
              {[
                { name: "Google Ads Search", url: "https://skillshop.credential.net/a820ba0d-107d-4af4-992c-ae113df8b07d" },
                { name: "Google Ads Display", url: "https://skillshop.credential.net/d55595ae-f8c0-4e1a-b3b5-f9b7396b17fa" },
                { name: "Google Ads Video", url: "https://skillshop.credential.net/07b0c6d2-5ae3-4b97-ad9c-81ac4df77954" },
                { name: "Google Ads Shopping", url: "https://skillshop.credential.net/dc17edd7-d689-4758-9df6-e41010e0a47f" },
                { name: "Google Ads App", url: "https://skillshop.credential.net/55215c1e-1d0e-46ad-98b9-9868ead5b66d" },
              ].map((cert) => (
                <a key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Text variant="body-default-s" onBackground="neutral-medium" className="hover-reveal">• {cert.name}</Text>
                </a>
              ))}
            </Column>
          </Row>
        </Column>

        {/* Skills - Hashtag Cloud */}
        <Column gap="16">
          <Heading variant="heading-strong-l">{t("career.skillsTitle")}</Heading>
          <Line background="neutral-alpha-weak" />
          <Flex gap="16" wrap horizontal="center" padding="16">
            {skills.map((skill) => {
              // Font size based on level (1 to 10)
              const fontSize = 12 + (skill.level * 1.2);
              const opacity = 0.4 + (skill.level * 0.06);
              
              return (
                <Flex
                  key={skill.name}
                  paddingX="12"
                  paddingY="4"
                  radius="full"
                  vertical="center"
                  style={{
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Text
                    variant="code-default-xs"
                    style={{
                      fontSize: `${fontSize}px`,
                      opacity: opacity,
                      fontWeight: skill.level > 7 ? 'bold' : 'normal',
                      color: skill.level > 8 ? 'var(--brand-on-background-strong)' : 'var(--neutral-on-background-weak)',
                    }}
                  >
                    #{skill.name.replace(/\s+/g, "").toLowerCase()}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Column>
      </Column>
    </Column>
  );
}