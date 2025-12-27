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
import { Code, Disc, Mic2, Music2 } from "lucide-react";
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
  const [infoIndex, setInfoIndex] = useState(0);

  // Now Playing info loop
  useEffect(() => {
    if (track) {
      const interval = setInterval(() => {
        setInfoIndex((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [track]);

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

  const trackInfo = track
    ? [
        { icon: <Music2 size={14} />, label: track.name },
        { icon: <Disc size={14} />, label: track.album?.["#text"] || "Album" },
        { icon: <Mic2 size={14} />, label: track.artist["#text"] },
      ]
    : [];

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
        gap="12"
        style={{ pointerEvents: "auto", position: "relative", maxWidth: "100%" }}
      >
        {/* Main Nav Capsule - Theme Aware Background */}
        <Flex
          vertical="center"
          paddingX="12"
          radius="full"
          style={{
            background: theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(20, 20, 20, 0.6)",
            backdropFilter: "blur(12px)",
            height: "48px",
            width: "fit-content",
            minWidth: "auto",
            border: "1px solid var(--neutral-alpha-weak)",
            boxShadow: "var(--shadow-elevation-dark-two)",
            position: "relative",
            zIndex: 2,
            maxWidth: "100%",
            overflow: "hidden",
            transition: "background 0.3s ease",
          }}
        >
          <Row
            vertical="center"
            fillWidth
            horizontal="between"
            gap="12"
            style={{ position: "relative", zIndex: 1 }}
          >
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
                    duration: 0.3,
                    ease: "easeInOut",
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
                    cursor: "pointer",
                  }}
                >
                  <Code size={16} className="text-brand-strong" style={{ flexShrink: 0 }} />
                  <AnimatePresence>
                    {isHomeHovered && (
                      <motion.span
                        initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                        animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                        exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        style={{
                          fontSize: "10px",
                          fontWeight: 900,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          color: "var(--brand-on-background-strong)",
                          overflow: "hidden",
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

        {/* Now Playing Layer - Floating Island */}
        <AnimatePresence>
          {track && (
            <motion.div
              initial={{ x: -20, opacity: 0, width: 0 }}
              animate={{ x: 0, opacity: 1, width: "auto" }}
              exit={{ x: -20, opacity: 0, width: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="hide-mobile"
              style={{
                paddingLeft: "12px",
                paddingRight: "16px",
                background: theme === "light" ? "rgba(240, 240, 240, 0.9)" : "var(--neutral-background-medium)",
                backdropFilter: "blur(16px)",
                height: "48px",
                display: "flex",
                alignItems: "center",
                borderRadius: "24px",
                border: "1px solid var(--neutral-alpha-weak)",
                boxShadow: "var(--shadow-elevation-dark-two)",
                zIndex: 1,
                overflow: "hidden",
                whiteSpace: "nowrap",
                transition: "background 0.3s ease",
              }}
            >
              <a
                href="https://www.last.fm/user/dagkan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
              >
                <Flex vertical="center" gap="12">
                  <Flex
                    radius="xs"
                    style={{
                      width: "32px",
                      height: "32px",
                      overflow: "hidden",
                      border: "1px solid var(--neutral-alpha-weak)",
                    }}
                  >
                    <img
                      src={
                        track.image.find((img) => img.size === "small")?.["#text"] ||
                        track.image[0]["#text"]
                      }
                      alt="Album Art"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Flex>

                  <div
                    style={{
                      height: "20px",
                      overflow: "hidden",
                      position: "relative",
                      width: "160px",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={infoIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Flex vertical="center" gap="8">
                          <Text style={{ color: "var(--neutral-on-background-weak)" }}>
                            {trackInfo[infoIndex]?.icon}
                          </Text>
                          <Text
                            variant="label-strong-s"
                            style={{ 
                              color: "var(--neutral-on-background-strong)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "130px"
                            }}
                          >
                            {trackInfo[infoIndex]?.label}
                          </Text>
                        </Flex>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <Flex
                    paddingX="8"
                    paddingY="2"
                    radius="xs"
                    style={{
                      background: "rgba(213, 16, 7, 0.1)",
                      border: "1px solid rgba(213, 16, 7, 0.2)",
                    }}
                  >
                    <Text
                      variant="code-default-xs"
                      style={{ color: "#d51007", fontWeight: "bold", fontSize: "10px" }}
                    >
                      NOW PLAYING
                    </Text>
                  </Flex>
                </Flex>
              </a>
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