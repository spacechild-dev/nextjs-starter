"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const translations = {
    en: {
        nav: {
            home: "Home",
            blog: "Blog",
            projects: "Projects",
            career: "Career",
            support: "Buy me a coffee",
            contact: "Contact",
            topics: "Topics",
            allPosts: "All Posts",
            digitalMarketing: "Digital Marketing",
            tracking: "Tracking",
            experience: "Experience",
            certificates: "Certificates"
        },
        home: {
            badge: "Performance Marketing & Tracking",
            bio1: "I created this site driven by both personal curiosity and professional interest. I enjoy experimenting with data-driven performance marketing, marketing analytics and insights, performance measurement, and marketing technologies—which is also my profession. Ironically, I balance data-driven strategies with holistic approaches.",
            bio2: "On this site, I test many things such as Google Tag Manager, Google Analytics 4, server-side GTM, Facebook CAPI, and offline conversions. Actually, since I update them so often, they're probably broken and I'm too lazy to fix them. Still, I'd appreciate it if you accepted the cookies (if those aren't broken too); that way, my experiments can yield healthier results.",
            footer: "Finally; algorithms change, minds get confused. Let's find solutions together.",
            chat: "Join the Conversation",
            recent: "Recent Writing",
            viewAll: "View All",
            beta: "This site is currently under development (BETA). Some things might be broken."
        },
        projects: {
            title: "Projects",
            description: "A collection of my web apps, tools, and experiments.",
            visit: "Visit Live",
            source: "Source",
            keyFeatures: "Key Features",
            back: "Back to Projects"
        },
        career: {
            title: "Career",
            summaryTitle: "Professional Summary",
            experienceTitle: "Experience",
            skillsTitle: "Skills & Tools",
            present: "Present"
        }
    },
    tr: {
        nav: {
            home: "Ana Sayfa",
            blog: "Blog",
            projects: "Projeler",
            career: "Kariyer",
            support: "Kahve Ismarla",
            contact: "İletişim",
            topics: "Konular",
            allPosts: "Tüm Yazılar",
            digitalMarketing: "Dijital Pazarlama",
            tracking: "Takip (Tracking)",
            experience: "Deneyim",
            certificates: "Sertifikalar"
        },
        home: {
            badge: "Performans Pazarlama & Tracking",
            bio1: "Bu siteyi hem kişisel merakım hem de mesleki ilgim doğrultusunda oluşturdum. Veriye dayalı performans pazarlama, pazarlama analitiği ve iç görüleri, performans ölçümlemesi ve pazarlama teknolojilerini deneyimlemeyi seviyorum -zaten işim de bu-. İroniktir ama veriye dayalı stratejileri bütünsel stratejilerle de dengelerim.",
            bio2: "Bu site üzerinde Google Tag Manager, Google Analytics 4, server side GTM, Facebook CAPI, çevrimdışı dönüşümler gibi birçok şeyi test ediyorum. Aslında zırt pırt güncellediğim için muhtemelen bozulmuşlardır ve düzeltmeye üşeniyorumdur. Yine de çerezleri kabul ederseniz (tabi bu da bozulmadıysa) çok sevinirim; böylece denemelerim daha sağlıklı sonuçlar verebilir.",
            footer: "Son olarak; algoritmalar değişiyor, kafalar karışıyor. Birlikte çözüm arayalım.",
            chat: "Sohbete Katıl",
            recent: "Son Yazılar",
            viewAll: "Tümünü Gör",
            beta: "Bu site şu anda geliştirme aşamasındadır (BETA). Bazı bölümler eksik veya hatalı olabilir."
        },
        projects: {
            title: "Projeler",
            description: "Web uygulamalarım, araçlarım ve deneylerimden oluşan bir koleksiyon.",
            visit: "Canlıya Git",
            source: "Kaynak Kod",
            keyFeatures: "Öne Çıkan Özellikler",
            back: "Projelere Dön"
        },
        career: {
            title: "Kariyer",
            summaryTitle: "Profesyonel Özet",
            experienceTitle: "Deneyim",
            skillsTitle: "Yetenekler & Araçlar",
            present: "Günümüz"
        }
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const host = window.location.hostname;
        if (host.includes("dagkanbayramoglu.com.tr")) {
            setLanguage("tr");
        } else if (host.includes("dagkanbayramoglu.com")) {
            setLanguage("en");
        } else {
            const saved = localStorage.getItem("language") as Language;
            if (saved) setLanguage(saved);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        
        const currentHost = window.location.hostname;
        if (lang === "tr" && !currentHost.includes(".com.tr")) {
            window.location.href = "https://dagkanbayramoglu.com.tr" + window.location.pathname;
        } else if (lang === "en" && currentHost.includes(".com.tr")) {
            window.location.href = "https://dagkanbayramoglu.com" + window.location.pathname;
        }
    };

    const t = (key: string) => {
        const keys = key.split(".");
        let result: any = translations[language];
        for (const k of keys) {
            if (result && result[k]) result = result[k];
            else return key;
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};