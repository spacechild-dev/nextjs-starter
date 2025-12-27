"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Flex,
  Text,
  Row,
  MegaMenu,
  MobileMegaMenu,
  Dialog,
  Button,
  Input,
  Textarea,
  IconButton,
  ToggleButton,
  Line,
  NavIcon,
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import * as analytics from "@/lib/analytics";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { SiLastdotfm } from "react-icons/si";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const { track } = useNowPlaying();

  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme);
    analytics.trackThemeChange(newTheme);
  };

  const menuGroups = [
    {
      id: "blog",
      label: t("nav.blog"),
      href: "/blog",
    },
    {
      id: "projects",
      label: t("nav.projects"),
      href: "/projects",
    },
    {
      id: "career",
      label: t("nav.career"),
      href: "/resume",
    },
  ];

  // Mobile specific settings group
  const mobileMenuGroups = [
    ...menuGroups,
    {
      id: "settings",
      label: language === "tr" ? "Ayarlar" : "Settings",
      sections: [
        {
          title: language === "tr" ? "Dil ve Tema" : "Language & Theme",
          links: [
            {
              label: language === "tr" ? "English" : "Türkçe",
              href: "#",
              icon: "globe",
              onClick: () => {
                const newLang = language === "en" ? "tr" : "en";
                setLanguage(newLang);
                analytics.trackLanguageChange(newLang);
              },
            },
            {
              label: theme === "dark" ? (language === "tr" ? "Aydınlık Mod" : "Light Mode") : (language === "tr" ? "Karanlık Mod" : "Dark Mode"),
              href: "#",
              icon: theme === "dark" ? "sun" : "moon",
              onClick: toggleTheme,
            },
          ],
        },
      ],
    },
  ];

  return (
    <Flex
      as="header"
      fillWidth
      paddingTop="16"
      paddingX="24"
      horizontal="center"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <Row
        vertical="center"
        gap="0"
        style={{ pointerEvents: "auto", position: "relative", maxWidth: "100%" }}
      >
                {/* BETA Label - Wider and Responsive */}
                <div className="hide-mobile">
                  <Flex
                    paddingX="32"
                    vertical="center"
                    style={{
                      backgroundColor: "var(--color-beta-bg)",
                      height: "48px",
                      borderTopLeftRadius: "24px",
                      borderBottomLeftRadius: "24px",
                      border: "1px solid var(--brand-alpha-medium)",
                      borderRight: "none",
                      boxShadow: "var(--shadow-elevation-dark-two)",
                      position: "relative",
                      zIndex: 1,
                      marginRight: "-24px",
                      paddingRight: "52px",
                    }}
                  >
                    <Text variant="label-strong-xs" style={{ color: "white", letterSpacing: "0.05em" }}>
                      BETA
                    </Text>
                  </Flex>
                </div>
        {/* Main Nav Capsule - Theme Aware Background */}
        <Flex
          vertical="center"
          paddingX="12"
          radius="full"
          style={{
            background: "var(--neutral-background-weak)",
            backdropFilter: "blur(16px)",
            height: "48px",
            width: "fit-content",
            minWidth: "auto",
            border: "1px solid var(--neutral-alpha-weak)",
            boxShadow: "var(--shadow-elevation-dark-two)",
            position: "relative",
            zIndex: 2,
            maxWidth: "100%",
          }}
        >
          <Row vertical="center" fillWidth horizontal="between" gap="12">
            <Row vertical="center" gap="12">
              <Link
                href="/"
                style={{ textDecoration: "none" }}
                onMouseEnter={() => setIsHomeHovered(true)}
                onMouseLeave={() => setIsHomeHovered(false)}
              >
                <motion.div
                  layout
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                    },
                    opacity: { duration: 0.2 },
                  }}
                  style={{
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--brand-alpha-weak)",
                    border: "1px solid var(--brand-alpha-medium)",
                    borderRadius: "9999px",
                    padding: "0 12px",
                    overflow: "hidden",
                    minWidth: "32px",
                  }}
                >
                  <Code size={16} className="text-brand-strong" style={{ flexShrink: 0 }} />
                  <AnimatePresence initial={false}>
                    {isHomeHovered && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1], // Custom ease-out
                        }}
                        style={{
                          marginLeft: "8px",
                          fontSize: "10px",
                          fontWeight: 900,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          color: "var(--brand-on-background-strong)",
                        }}
                      >
                        {language === "tr" ? "Anasayfa" : "Home"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>

              {/* Desktop Menu - Simple Links (MegaMenu is TODO) */}
              <div className="hide-mobile">
                <Row gap="8" vertical="center">
                  <Button href="/blog" variant="tertiary" size="s">
                    {t("nav.blog")}
                  </Button>
                  <Button href="/projects" variant="tertiary" size="s">
                    {t("nav.projects")}
                  </Button>
                  <Button href="/resume" variant="tertiary" size="s">
                    {t("nav.career")}
                  </Button>
                </Row>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="hide-desktop">
                <Row>
                  <NavIcon
                    isActive={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </Row>
              </div>
            </Row>

            <div className="hide-mobile">
              <Row vertical="center" gap="8">
                {/* Integrated Switcher Group */}
                <Flex background="neutral-alpha-weak" radius="full" padding="2" vertical="center">
                  <ToggleButton
                    id="lang-en"
                    size="s"
                    selected={language === "en"}
                    onClick={() => {
                      setLanguage("en");
                      analytics.trackLanguageChange("en");
                    }}
                  >
                    EN
                  </ToggleButton>
                  <ToggleButton
                    id="lang-tr"
                    size="s"
                    selected={language === "tr"}
                    onClick={() => {
                      setLanguage("tr");
                      analytics.trackLanguageChange("tr");
                    }}
                  >
                    TR
                  </ToggleButton>
                  <Line vert background="neutral-alpha-medium" height="12" marginX="4" />
                  <IconButton
                    id="theme-toggle"
                    size="s"
                    variant="tertiary"
                    icon={theme === "dark" ? "sun" : "moon"}
                    onClick={toggleTheme}
                  />
                </Flex>
              </Row>
            </div>
          </Row>
        </Flex>

        {/* Now Playing Layer - Slides out from behind */}
        <AnimatePresence>
          {track && (
            <motion.div
              initial={{ x: -20, opacity: 0, width: 0 }}
              animate={{ x: 0, opacity: 1, width: "auto" }}
              exit={{ x: -20, opacity: 0, width: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="hide-mobile"
              style={{
                marginLeft: "-24px",
                paddingLeft: "36px",
                paddingRight: "20px",
                background: "var(--neutral-background-weak)",
                backdropFilter: "blur(16px)",
                height: "48px",
                display: "flex",
                alignItems: "center",
                border: "1px solid var(--neutral-alpha-weak)",
                borderLeft: "none",
                borderTopRightRadius: "24px",
                borderBottomRightRadius: "24px",
                boxShadow: "var(--shadow-elevation-dark-two)",
                zIndex: 1,
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              <Flex vertical="center" gap="12">
                <SiLastdotfm style={{ color: "#d51007" }} size={14} />
                <Text variant="code-default-xs" style={{ color: "#d51007", fontWeight: "bold" }}>
                  {track.name}
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {track.artist["#text"]}
                </Text>
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>
      </Row>

      {/* Mobile Mega Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMegaMenu
            menuGroups={[{ id: "home", label: t("nav.home"), href: "/" }, ...mobileMenuGroups]}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </Flex>
  );
};
