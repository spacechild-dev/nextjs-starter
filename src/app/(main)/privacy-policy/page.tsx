"use client";

import React from "react";
import { Heading, Text, Column, Flex, Line, Button } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: December 27, 2025",
      intro: "This Privacy Policy explains how Dağkan Bayramoğlu ('we', 'us', or 'our') collects, uses, and discloses information about you when you use our website (dagkanbayramoglu.com, daiquiri.dev) and our applications (including Spotify Mixtape, Flow OTP, and others available on our GitHub repositories).",
      sections: [
        {
          heading: "1. Information We Collect",
          text: "We collect information you provide directly to us when you use our services. This includes:",
          items: [
            "**Account Information:** When you log in with Google, GitHub, or Spotify, we collect your name, email address, and profile picture to create and manage your account.",
            "**Usage Data:** We collect data about how you interact with our services, including pages visited, time spent, and clicked links.",
            "**Device Information:** We collect information about the device you use to access our services, including IP address, browser type, and operating system."
          ]
        },
        {
          heading: "2. Third-Party Services & Integrations",
          text: "Our services integrate with various third-party platforms. By using these integrations, you agree to their respective privacy policies:",
          items: [
            "**Spotify:** We use the Spotify Web API to authenticate users and manage playlists (e.g., in Spotify Mixtape). We do not store your Spotify credentials. We only access data explicitly authorized by you (e.g., 'playlist-modify-public').",
            "**Google:** We use Google for authentication and analytics (Google Analytics 4).",
            "**GitHub:** We use GitHub for authentication and to display repository information.",
            "**Last.fm:** We fetch your listening history to display 'Now Playing' information. This is read-only access."
          ]
        },
        {
          heading: "3. How We Use Your Information",
          text: "We use the collected information to:",
          items: [
            "Provide, maintain, and improve our services.",
            "Authenticate your identity.",
            "Personalize your experience (e.g., displaying your saved playlists).",
            "Analyze usage trends to improve functionality and user experience."
          ]
        },
        {
          heading: "4. Cookies and Tracking Technologies",
          text: "We use cookies and similar technologies to authentication and tracking purposes. You can control cookies through your browser settings. We use Google Analytics to understand website traffic.",
          items: []
        },
        {
          heading: "5. Data Retention and Security",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it. We implement reasonable security measures to protect your information.",
          items: []
        },
        {
          heading: "6. Your Rights",
          text: "You have the right to request access to, correction of, or deletion of your personal information. You can also revoke third-party app permissions (e.g., remove our app from your Spotify Apps settings) at any time.",
          items: []
        },
        {
          heading: "7. Contact Us",
          text: "If you have any questions about this Privacy Policy, please contact us at:",
          items: ["hello@dagkanbayramoglu.com"]
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 27 Aralık 2025",
      intro: "Bu Gizlilik Politikası, Dağkan Bayramoğlu ('biz', 'bizi' veya 'bizim') olarak, web sitemizi (dagkanbayramoglu.com, daiquiri.dev) ve uygulamalarımızı (Spotify Mixtape, Flow OTP ve GitHub depolarımızda bulunan diğerleri dahil) kullandığınızda hakkınızdaki bilgileri nasıl topladığımızı, kullandığımızı ve açıkladığımızı belirtir.",
      sections: [
        {
          heading: "1. Topladığımız Bilgiler",
          text: "Hizmetlerimizi kullandığınızda bize doğrudan sağladığınız bilgileri topluyoruz. Bunlar şunları içerir:",
          items: [
            "**Hesap Bilgileri:** Google, GitHub veya Spotify ile giriş yaptığınızda, hesabınızı oluşturmak ve yönetmek için adınızı, e-posta adresinizi ve profil resminizi topluyoruz.",
            "**Kullanım Verileri:** Ziyaret edilen sayfalar, geçirilen süre ve tıklanan bağlantılar dahil olmak üzere hizmetlerimizle nasıl etkileşimde bulunduğunuz hakkında veri topluyoruz.",
            "**Cihaz Bilgileri:** IP adresi, tarayıcı türü ve işletim sistemi dahil olmak üzere hizmetlerimize erişmek için kullandığınız cihaz hakkında bilgi topluyoruz."
          ]
        },
        {
          heading: "2. Üçüncü Taraf Hizmetleri ve Entegrasyonlar",
          text: "Hizmetlerimiz çeşitli üçüncü taraf platformlarıyla entegre çalışır. Bu entegrasyonları kullanarak, ilgili platformların gizlilik politikalarını kabul etmiş olursunuz:",
          items: [
            "**Spotify:** Kullanıcıları doğrulamak ve çalma listelerini yönetmek (örn. Spotify Mixtape uygulamasında) için Spotify Web API kullanıyoruz. Spotify kimlik bilgilerinizi saklamıyoruz. Yalnızca sizin açıkça yetki verdiğiniz verilere (örn. 'playlist-modify-public') erişiyoruz.",
            "**Google:** Kimlik doğrulama ve analiz (Google Analytics 4) için Google hizmetlerini kullanıyoruz.",
            "**GitHub:** Kimlik doğrulama ve depo bilgilerini görüntülemek için GitHub kullanıyoruz.",
            "**Last.fm:** 'Şu An Çalıyor' bilgisini görüntülemek için dinleme geçmişinizi çekiyoruz. Bu sadece okuma amaçlı bir erişimdir."
          ]
        },
        {
          heading: "3. Bilgilerinizi Nasıl Kullanıyoruz",
          text: "Toplanan bilgileri şu amaçlarla kullanıyoruz:",
          items: [
            "Hizmetlerimizi sağlamak, sürdürmek ve iyileştirmek.",
            "Kimliğinizi doğrulamak.",
            "Deneyiminizi kişiselleştirmek (örn. kayıtlı çalma listelerinizi göstermek).",
            "İşlevselliği ve kullanıcı deneyimini geliştirmek için kullanım trendlerini analiz etmek."
          ]
        },
        {
          heading: "4. Çerezler ve Takip Teknolojileri",
          text: "Kimlik doğrulama ve izleme amaçları için çerezler ve benzer teknolojiler kullanıyoruz. Çerezleri tarayıcı ayarlarınızdan kontrol edebilirsiniz. Web sitesi trafiğini anlamak için Google Analytics kullanıyoruz.",
          items: []
        },
        {
          heading: "5. Veri Saklama ve Güvenlik",
          text: "Kişisel bilgilerinizi yalnızca toplama amaçlarımızı gerçekleştirmek için gerekli olduğu sürece saklıyoruz. Bilgilerinizi korumak için makul güvenlik önlemleri uyguluyoruz.",
          items: []
        },
        {
          heading: "6. Haklarınız",
          text: "Kişisel bilgilerinize erişme, düzeltme veya silme talebinde bulunma hakkına sahipsiniz. Ayrıca üçüncü taraf uygulama izinlerini (örn. Spotify Uygulama ayarlarından uygulamamızı kaldırarak) istediğiniz zaman iptal edebilirsiniz.",
          items: []
        },
        {
          heading: "7. İletişim",
          text: "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:",
          items: ["hello@dagkanbayramoglu.com"]
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
              {section.text && (
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {section.text}
                </Text>
              )}
              {section.items.length > 0 && (
                <ul style={{ paddingLeft: "20px", marginTop: "8px", listStyleType: "disc" }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {item.includes("**") ? (
                          <>
                            <strong>{item.split("**")[1]}</strong>
                            {item.split("**")[2]}
                          </>
                        ) : (
                          item
                        )}
                      </Text>
                    </li>
                  ))}
                </ul>
              )}
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
