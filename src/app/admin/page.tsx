"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Column,
  useToast,
  Background,
} from "@once-ui-system/core";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      addToast({
        message: "Erişim reddedildi. Lütfen bilgilerinizi kontrol edin.",
        variant: "danger",
      });
      setLoading(false);
    } else {
      addToast({
        message: "Başarıyla giriş yapıldı. Dashboard'a yönlendiriliyorsunuz.",
        variant: "success",
      });
      router.push("/admin/dashboard");
    }
  };

  return (
    <Column fillWidth horizontal="center" vertical="center" style={{ minHeight: "100vh", position: 'relative' }}>
      <Background
        gradient={{
          display: true,
          opacity: 40,
          x: 50,
          y: 0,
          width: 100,
          height: 100,
          tilt: 0,
          colorStart: "brand-background-strong",
          colorEnd: "static-transparent",
        }}
        dots={{
          display: true,
          opacity: 20,
          size: "2",
        }}
      />
      
      <Flex
        direction="column"
        padding="48"
        radius="xl"
        background="surface"
        border="neutral-alpha-weak"
        maxWidth="xs"
        fillWidth
        gap="32"
        style={{ 
          boxShadow: "var(--shadow-elevation-dark-three)",
          backdropFilter: 'blur(12px)',
          zIndex: 1
        }}
      >
        <Column gap="8" horizontal="center">
          <Heading variant="display-strong-xs">Yönetim Paneli</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            Devam etmek için yönetici bilgilerinizi girin.
          </Text>
        </Column>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Flex direction="column" gap="16">
            <Input
              id="admin-email"
              label="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="admin-password"
              label="Şifre"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="primary"
              fillWidth
              loading={loading}
            >
              Giriş Yap
            </Button>
          </Flex>
        </form>
      </Flex>
    </Column>
  );
}
