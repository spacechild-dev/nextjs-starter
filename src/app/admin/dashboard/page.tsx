"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Column,
  Row,
  Line,
  Icon,
  Badge,
  Background,
} from "@once-ui-system/core";

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <Column fillWidth padding="48" gap="48" style={{ minHeight: '100vh', position: 'relative' }}>
      <Background
        dots={{
          display: true,
          opacity: 0.1,
          size: "2",
        }}
      />

      {/* Top Header */}
      <Row horizontal="between" vertical="center" fillWidth style={{ zIndex: 1 }}>
        <Column gap="8">
          <Row vertical="center" gap="12">
            <Heading variant="display-strong-s">Dashboard</Heading>
            <Badge variant="brand" size="s">Admin</Badge>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Hoş geldin, {session?.user?.email}
          </Text>
        </Column>
        <Button variant="tertiary" size="s" onClick={() => signOut({ callbackUrl: "/admin" })}>
          Çıkış Yap
        </Button>
      </Row>

      <Line background="neutral-alpha-weak" />

      {/* Main Grid */}
      <Row gap="24" wrap style={{ zIndex: 1 }}>
        {/* Blog & Content */}
        <Flex
          flex={1}
          direction="column"
          padding="32"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="24"
          style={{ minWidth: "320px", transition: 'transform 0.2s ease' }}
          className="hover-reveal"
        >
          <Row vertical="center" gap="12">
            <Flex background="brand-alpha-weak" padding="12" radius="m">
              <Icon name="document" size="m" onBackground="brand-strong" />
            </Flex>
            <Heading variant="heading-strong-l">İçerik</Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Blog yazılarını ve projelerini yönet, düzenle veya yenilerini ekle.
          </Text>
          <Button variant="secondary" size="m" suffixIcon="chevronRight" fillWidth>
            Blog Yönetimi
          </Button>
        </Flex>

        {/* SEO & Analytics */}
        <Flex
          flex={1}
          direction="column"
          padding="32"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="24"
          style={{ minWidth: "320px", transition: 'transform 0.2s ease' }}
          className="hover-reveal"
        >
          <Row vertical="center" gap="12">
            <Flex background="accent-alpha-weak" padding="12" radius="m">
              <Icon name="chart" size="m" onBackground="accent-strong" />
            </Flex>
            <Heading variant="heading-strong-l">SEO & Analiz</Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Arama performansı, anahtar kelime takibi ve site trafiğini izle.
          </Text>
          <Button 
            variant="secondary" 
            size="m" 
            suffixIcon="chevronRight" 
            fillWidth
            onClick={() => router.push("/admin/tracking")}
          >
            Takip Araçlarını Yönet
          </Button>
        </Flex>

        {/* Profile & Settings */}
        <Flex
          flex={1}
          direction="column"
          padding="32"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="24"
          style={{ minWidth: "320px", transition: 'transform 0.2s ease' }}
          className="hover-reveal"
        >
          <Row vertical="center" gap="12">
            <Flex background="neutral-alpha-weak" padding="12" radius="m">
              <Icon name="person" size="m" onBackground="neutral-strong" />
            </Flex>
            <Heading variant="heading-strong-l">Profil</Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Kariyer bilgileri, sertifikalar ve yetenek puanlarını güncelle.
          </Text>
          <Button variant="secondary" size="m" suffixIcon="chevronRight" fillWidth>
            Ayarları Düzenle
          </Button>
        </Flex>
      </Row>

      {/* Stats Summary Area (Placeholder for now) */}
      <Flex
        fillWidth
        padding="32"
        radius="l"
        background="surface"
        border="neutral-alpha-weak"
        direction="column"
        gap="16"
        style={{ zIndex: 1 }}
      >
        <Heading variant="heading-strong-m">Site Özeti</Heading>
        <Row gap="48" wrap>
          <Column gap="4">
            <Text variant="label-default-s" onBackground="neutral-weak">Toplam Yazı</Text>
            <Text variant="display-strong-xs">3</Text>
          </Column>
          <Column gap="4">
            <Text variant="label-default-s" onBackground="neutral-weak">Projeler</Text>
            <Text variant="display-strong-xs">2</Text>
          </Column>
          <Column gap="4">
            <Text variant="label-default-s" onBackground="neutral-weak">Sertifikalar</Text>
            <Text variant="display-strong-xs">9</Text>
          </Column>
        </Row>
      </Flex>
    </Column>
  );
}