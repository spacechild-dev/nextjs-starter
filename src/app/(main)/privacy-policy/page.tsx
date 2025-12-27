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
      intro: "This Privacy Policy explains how Dağkan Bayramoğlu ('I', 'me', or 'my') collects, uses, and discloses information about you when you use my websites (dagkanbayramoglu.com, daiquiri.dev, spacechild.dev, matchtype.dev, mixtapekit.dev) and applications (including Spotify Mixtape, Flow OTP, and others available on my GitHub repositories).",
      sections: [
        {
          heading: "1. Information I Collect",
          text: "I collect information you provide directly to me when you use my services. This includes:",
          items: [
            "**Account Information:** When you log in with Google, GitHub, or Spotify, I collect your name, email address, and profile picture to create and manage your account.",
            "**Usage Data:** I collect data about how you interact with my services, including pages visited, time spent, and clicked links.",
            "**Device Information:** I collect information about the device you use to access my services, including IP address, browser type, and operating system."
          ]
        },
        {
          heading: "2. Third-Party Services & Integrations",
          text: "My services integrate with various third-party platforms. By using these integrations, you agree to their respective privacy policies:",
          items: [
            "**Spotify:** I use the Spotify Web API to authenticate users and manage playlists (e.g., in Spotify Mixtape). I do not store your Spotify credentials. I only access data explicitly authorized by you (e.g., 'playlist-modify-public').",
            "**Google:** I use Google for authentication and analytics (Google Analytics 4).",
            "**GitHub:** I use GitHub for authentication and to display repository information.",
            "**Last.fm:** I fetch your listening history to display 'Now Playing' information. This is read-only access."
          ]
        },
        {
          heading: "3. How I Use Your Information",
          text: "I use the collected information to:",
          items: [
            "Provide, maintain, and improve my services.",
            "Authenticate your identity.",
            "Personalize your experience (e.g., displaying your saved playlists).",
            "Analyze usage trends to improve functionality and user experience."
          ]
        },
        {
          heading: "4. Cookies and Tracking Technologies",
          text: "I use cookies and similar technologies for authentication and tracking purposes. You can control cookies through your browser settings. I use Google Analytics to understand website traffic.",
          items: []
        },
        {
          heading: "5. Data Retention and Security",
          text: "I retain your personal information only for as long as necessary to fulfill the purposes for which I collected it. I implement reasonable security measures to protect your information.",
          items: []
        },
        {
          heading: "6. Your Rights",
          text: "You have the right to request access to, correction of, or deletion of your personal information. You can also revoke third-party app permissions (e.g., remove my app from your Spotify Apps settings) at any time.",
          items: []
        },
        {
          heading: "7. Contact Me",
          text: "If you have any questions about this Privacy Policy, please contact me at:",
          items: ["hello@dagkanbayramoglu.com"]
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 27 Aralık 2025",
      intro: "Bu Gizlilik Politikası, Dağkan Bayramoğlu ('ben', 'bana' veya 'benim') olarak, web sitelerimi (dagkanbayramoglu.com, daiquiri.dev, spacechild.dev, matchtype.dev, mixtapekit.dev) ve uygulamalarımı (Spotify Mixtape, Flow OTP ve GitHub depolarımda bulunan diğerleri dahil) kullandığınızda hakkınızdaki bilgileri nasıl topladığımı, kullandığımı ve açıkladığımı belirtir.",
      sections: [
        {
          heading: "1. Topladığım Bilgiler",
          text: "Hizmetlerimi kullandığınızda bana doğrudan sağladığınız bilgileri topluyorum. Bunlar şunları içerir:",
          items: [
            "**Hesap Bilgileri:** Google, GitHub veya Spotify ile giriş yaptığınızda, hesabınızı oluşturmak ve yönetmek için adınızı, e-posta adresinizi ve profil resminizi topluyorum.",
            "**Kullanım Verileri:** Ziyaret edilen sayfalar, geçirilen süre ve tıklanan bağlantılar dahil olmak üzere hizmetlerimle nasıl etkileşimde bulunduğunuz hakkında veri topluyorum.",
            "**Cihaz Bilgileri:** IP adresi, tarayıcı türü ve işletim sistemi dahil olmak üzere hizmetlerime erişmek için kullandığınız cihaz hakkında bilgi topluyorum."
          ]
        },
        {
          heading: "2. Üçüncü Taraf Hizmetleri ve Entegrasyonlar",
          text: "Hizmetlerim çeşitli üçüncü taraf platformlarıyla entegre çalışır. Bu entegrasyonları kullanarak, ilgili platformların gizlilik politikalarını kabul etmiş olursunuz:",
          items: [
            "**Spotify:** Kullanıcıları doğrulamak ve çalma listelerini yönetmek (örn. Spotify Mixtape uygulamasında) için Spotify Web API kullanıyorum. Spotify kimlik bilgilerinizi saklamıyorum. Yalnızca sizin açıkça yetki verdiğiniz verilere (örn. 'playlist-modify-public') erişiyorum.",
            "**Google:** Kimlik doğrulama ve analiz (Google Analytics 4) için Google hizmetlerini kullanıyorum.",
            "**GitHub:** Kimlik doğrulama ve depo bilgilerini görüntülemek için GitHub kullanıyorum.",
            "**Last.fm:** 'Şu An Çalıyor' bilgisini görüntülemek için dinleme geçmişinizi çekiyorum. Bu sadece okuma amaçlı bir erişimdir."
          ]
        },
        {
          heading: "3. Bilgilerinizi Nasıl Kullanıyorum",
          text: "Toplanan bilgileri şu amaçlarla kullanıyorum:",
          items: [
            "Hizmetlerimi sağlamak, sürdürmek ve iyileştirmek.",
            "Kimliğinizi doğrulamak.",
            "Deneyiminizi kişiselleştirmek (örn. kayıtlı çalma listelerinizi göstermek).",
            "İşlevselliği ve kullanıcı deneyimini geliştirmek için kullanım trendlerini analiz etmek."
          ]
        },
        {
          heading: "4. Çerezler ve Takip Teknolojileri",
          text: "Kimlik doğrulama ve izleme amaçları için çerezler ve benzer teknolojiler kullanıyorum. Çerezleri tarayıcı ayarlarınızdan kontrol edebilirsiniz. Web sitesi trafiğini anlamak için Google Analytics kullanıyorum.",
          items: []
        },
        {
          heading: "5. Veri Saklama ve Güvenlik",
          text: "Kişisel bilgilerinizi yalnızca toplama amaçlarımı gerçekleştirmek için gerekli olduğu sürece saklıyorum. Bilgilerinizi korumak için makul güvenlik önlemleri uyguluyorum.",
          items: []
        },
        {
          heading: "6. Haklarınız",
          text: "Kişisel bilgilerinize erişme, düzeltme veya silme talebinde bulunma hakkına sahipsiniz. Ayrıca üçüncü taraf uygulama izinlerini (örn. Spotify Uygulama ayarlarından uygulamamı kaldırarak) istediğiniz zaman iptal edebilirsiniz.",
          items: []
        },
        {
          heading: "7. İletişim",
          text: "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen benimle iletişime geçin:",
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
