"use client";

import React from "react";
import Link from "next/link";
import {
  Heading,
  Text,
  Column,
  Flex,
} from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const { t, language } = useLanguage();

  const posts = [
    {
      title: language === "tr" ? "UTM & ClickID Takibi: Parametreleri Tarayıcıda Saklama Rehberi" : "UTM & ClickID Tracking: A Guide to Storing Parameters in the Browser",
      description: language === "tr" ? "UTM parametrelerini ve Click ID'leri localStorage/sessionStorage üzerinde saklayarak dijital pazarlama analizlerinizi nasıl iyileştirebileceğinizi öğrenin." : "Learn how to capture and store UTM parameters and Click IDs in local and session storage to maintain tracking data across user sessions.",
      date: "2024-07-05",
      slug: "utm-parameters-and-tracking",
      tags: ["marketing", "analytics", "tracking"]
    }
  ];

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" fillWidth gap="l">
        <Column gap="12" marginBottom="32">
          <Heading variant="display-strong-s">{t("nav.blog")}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {language === "tr" ? "Öğrendiklerimi, projelerimi ve düşüncelerimi paylaşıyorum." : "Sharing my thoughts, projects, and what I've learned"}
          </Text>
        </Column>

        <Flex direction="column" gap="16">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
              <Flex 
                fillWidth 
                padding="24" 
                radius="l" 
                background="surface" 
                border="neutral-alpha-weak" 
                direction="column" 
                gap="8"
                style={{ transition: 'all 0.2s ease' }}
              >
                <Text variant="code-default-s" onBackground="neutral-weak">{post.date}</Text>
                <Heading variant="heading-strong-m">{post.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{post.description}</Text>
                <Flex gap="8" wrap marginTop="8">
                  {post.tags.map((tag) => (
                    <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                      <Text variant="code-default-xs">#{tag}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
