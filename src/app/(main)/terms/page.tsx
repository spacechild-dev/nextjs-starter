"use client";

import React from "react";
import { Heading, Text, Column, Line, Button } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: December 27, 2025",
      intro: "By using my websites (dagkanbayramoglu.com, daiquiri.dev, spacechild.dev, matchtype.dev, mixtapekit.dev) and my applications, you agree to the following terms.",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          text: "By accessing or using my services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
          heading: "2. Use of Services",
          text: "My applications (like Spotify Mixtape) are provided for personal, non-commercial use. You must not use these services for any illegal or unauthorized purpose."
        },
        {
          heading: "3. User Accounts",
          text: "When you create an account using third-party logins (Google, Spotify, GitHub), you are responsible for maintaining the security of your account."
        },
        {
          heading: "4. Intellectual Property",
          text: "The content, original images, design, and applications on these websites are my intellectual property and are protected by copyright laws unless otherwise stated (e.g., open-source code on GitHub)."
        },
        {
          heading: "5. Disclaimer",
          text: "My services are provided 'as is' without any warranties. I am not responsible for any data loss or issues arising from the use of my applications."
        }
      ]
    },
    tr: {
      title: "Kullanım Koşulları",
      lastUpdated: "Son Güncelleme: 27 Aralık 2025",
      intro: "Web sitelerimi (dagkanbayramoglu.com, daiquiri.dev, spacechild.dev, matchtype.dev, mixtapekit.dev) ve uygulamalarımı kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.",
      sections: [
        {
          heading: "1. Şartların Kabulü",
          text: "Hizmetlerime erişerek veya bunları kullanarak, bu Kullanım Koşullarına ve geçerli tüm yasalara ve düzenlemelere bağlı kalmayı kabul edersiniz."
        },
        {
          heading: "2. Hizmetlerin Kullanımı",
          text: "Uygulamalarım (Spotify Mixtape gibi) kişisel, ticari olmayan kullanım için sunulmaktadır. Bu hizmetleri yasa dışı veya yetkisiz bir amaçla kullanmamalısınız."
        },
        {
          heading: "3. Kullanıcı Hesapları",
          text: "Üçüncü taraf girişlerini (Google, Spotify, GitHub) kullanarak bir hesap oluşturduğunuzda, hesabınızın güvenliğini sağlamaktan siz sorumlusunuz."
        },
        {
          heading: "4. Fikri Mülkiyet",
          text: "Bu web sitelerindeki içerik, orijinal görseller, tasarım ve uygulamalar benim fikri mülkiyetimdir ve aksi belirtilmedikçe (örn. GitHub'daki açık kaynak kodlar) telif hakkı yasalarıyla korunmaktadır."
        },
        {
          heading: "5. Sorumluluk Reddi",
          text: "Hizmetlerim 'olduğu gibi' sunulmaktadır ve herhangi bir garanti verilmemektedir. Uygulamalarımın kullanımından kaynaklanan veri kaybı veya sorunlardan sorumlu değilim."
        }
      ]
    }
  };

  const t = language === "tr" ? content.tr : content.en;

  return (
    <Column
      fillWidth
      horizontal="center"
      paddingY="128"
      paddingX="l"
      style={{ minHeight: "100vh" }}
    >
      <Column maxWidth="m" fillWidth gap="48">
        <Column gap="16">
          <Heading variant="display-strong-s">{t.title}</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {t.lastUpdated}
          </Text>
          <Line background="neutral-alpha-weak" />
          <Text variant="body-default-l" onBackground="neutral-medium">
            {t.intro}
          </Text>
        </Column>

        <Column gap="32">
          {t.sections.map((section, index) => (
            <Column key={index} gap="12">
              <Heading variant="heading-strong-m">{section.heading}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {section.text}
              </Text>
            </Column>
          ))}
        </Column>

        <Line background="neutral-alpha-weak" />
        
        <Button href="/" variant="tertiary" size="m" prefixIcon="chevronLeft">
          {language === "tr" ? "Ana Sayfaya Dön" : "Back to Home"}
        </Button>
      </Column>
    </Column>
  );
}
