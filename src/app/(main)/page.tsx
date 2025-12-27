"use client";

import React from "react";
import { Heading, Text, Button, Column, Flex, Row, Icon } from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify, FaLastfm } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";
import { NowPlaying } from "@/components/NowPlaying";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CTALink from "@/components/CTALink";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { t, language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const posts = [
    {
      title:
        language === "tr"
          ? "UTM & ClickID Takibi: Parametreleri Tarayıcıda Saklama Rehberi"
          : "UTM & ClickID Tracking: A Guide to Storing Parameters in the Browser",
      description:
        language === "tr"
          ? "Dijital pazarlama ve performans analizinde, UTM parametreleri ve tıklama id'leri (Click ID) gibi izleme parametreleri web sitesi ziyaretçilerini daha iyi anlamak için kritik bir rol oynuyor. Bu yazıda ziyaretçilerin ilk ziyaretinde adres çubuğunda görünen parametreleri nasıl saklayabileceğimize ve sonrasında kullanabileceğimize değineceğim. Script'in tamamını makale sonunda paylaşacağım fakat önerim, yapay zekadan da destek alıp kendi kodunuzu yazdırmanız. Ufak tefek detaylar gözden kaçabilir fakat bu şekilde mantığını kavramanız da kolaylaşır."
          : "In digital marketing and performance analysis, tracking parameters like UTM parameters and Click IDs play a critical role in better understanding website visitors. In this article, I will discuss how we can store parameters visible in the address bar during a visitor's first visit and use them later.",
      date: language === "tr" ? "Temmuz 5, 2024" : "July 5, 2024",
      slug: "utm-parameters-and-tracking",
      readingTime: language === "tr" ? "6 dakika" : "6 minutes",
    },
  ];

  return (
    <Column fillWidth horizontal="center">
      {/* Hero Section - 95% Height Centered */}
      <Column
        fillWidth
        horizontal="center"
        vertical="center"
        paddingX="l"
        style={{ minHeight: "95vh", position: "relative", overflow: "hidden" }}
      >
        {/* Card Rain Effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.3,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, x: Math.random() * 1000 - 500 }}
              animate={{ y: 800 }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                position: "absolute",
                left: "50%",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "var(--neutral-on-background-weak)",
                boxShadow: "0 0 4px var(--neutral-on-background-weak)",
              }}
            />
          ))}
        </div>

        <Column maxWidth="m" horizontal="center" gap="48" align="center" style={{ zIndex: 1 }}>
          <Column gap="32" horizontal="center">
            <Text
              variant="body-default-l"
              onBackground="neutral-strong"
              wrap="balance"
              align="center"
              style={{
                lineHeight: "1.8",
                color: "var(--neutral-on-background-strong)",
              }}
            >
              {t("home.bio1")}
            </Text>
            <Text
              variant="body-default-l"
              onBackground="neutral-strong"
              wrap="balance"
              align="center"
              style={{
                lineHeight: "1.8",
                color: "var(--neutral-on-background-strong)",
              }}
            >
              {t("home.bio2")}
            </Text>
          </Column>

          <NowPlaying />

          <Flex gap="12" wrap horizontal="center">
            <CTALink href={social.github} variant="secondary" size="s">
              <Flex gap="8" vertical="center">
                <FaGithub /> GitHub
              </Flex>
            </CTALink>

            <CTALink href={social.linkedin} variant="secondary" size="s">
              <Flex gap="8" vertical="center">
                <FaLinkedin /> LinkedIn
              </Flex>
            </CTALink>

            <CTALink href={social.spotify} variant="secondary" size="s">
              <Flex gap="8" vertical="center">
                <FaSpotify /> Spotify
              </Flex>
            </CTALink>

            <CTALink href={social.lastfm} variant="secondary" size="s">
              <Flex gap="8" vertical="center">
                <FaLastfm /> Last.fm
              </Flex>
            </CTALink>

            <CTALink href={social.discogs} variant="secondary" size="s">
              <Flex gap="8" vertical="center">
                <SiDiscogs /> Discogs
              </Flex>
            </CTALink>

            <Button
              size="s"
              variant="primary"
              onClick={() => setIsContactOpen(true)}
            >
              <Flex gap="8" vertical="center">
                <FaEnvelope /> Get in Touch
              </Flex>
            </Button>
          </Flex>

          <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </Column>
      </Column>

      {/* Blog Section */}
      <Column
        fillWidth
        horizontal="center"
        paddingY="80"
        paddingX="l"
      >
        <Column maxWidth="m" fillWidth gap="32">
          <Row fillWidth horizontal="start" vertical="center">
            <Heading
              variant="display-strong-xs"
              style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              BLOG
            </Heading>
          </Row>

          <Flex direction="column" gap="16">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Flex
                  fillWidth
                  padding="32"
                  radius="l"
                  background="page"
                  border="neutral-alpha-weak"
                  direction="column"
                  gap="24"
                  style={{
                    transition: "all 0.3s ease",
                    boxShadow: "var(--shadow-elevation-light)",
                  }}
                  className="hover-reveal"
                >
                  <Column gap="16">
                    <Heading variant="heading-strong-l" style={{ lineHeight: "1.3" }}>
                      {post.title}
                    </Heading>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-medium"
                      style={{ lineHeight: "1.8" }}
                    >
                      {post.description}
                    </Text>
                  </Column>

                  <Row fillWidth horizontal="between" vertical="center">
                    <Row vertical="center" gap="8">
                      <Icon name="clock" size="s" onBackground="neutral-weak" />
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {language === "tr"
                          ? `Okuma süresi: ${post.readingTime}`
                          : `Reading time: ${post.readingTime}`}
                      </Text>
                    </Row>
                    <Row vertical="center" gap="8">
                      <Icon name="calendar" size="s" onBackground="neutral-weak" />
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {post.date}
                      </Text>
                    </Row>
                  </Row>
                </Flex>
              </Link>
            ))}
          </Flex>

          <Row horizontal="center" marginTop="16">
            <Button href="/blog" variant="tertiary" size="s" suffixIcon="chevronRight">
              {t("home.viewAll")}
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
