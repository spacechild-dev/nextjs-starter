"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Flex,
  Text,
  Row,
  Button,
  IconButton,
  ToggleButton,
  Line,
  NavIcon,
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { Code } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import * as analytics from "@/lib/analytics";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const { track } = useNowPlaying();
  const [isDaiquiri, setIsDaiquiri] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <Flex direction="column" horizontal="center" gap="8" style={{ width: '100%' }}>
        <Row
          vertical="center"
          gap="0"
          style={{ pointerEvents: "auto", position: "relative", maxWidth: "100%" }}
        >
          {/* Main Nav Capsule */}
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
                          transition={{ duration: 0.3, ease: "easeInOut" }}
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

                <div className="hide-mobile">
                  <Row gap="8" vertical="center">
                    <Button href="/blog" variant="tertiary" size="s">
                      {t("nav.blog")}
                    </Button>
                    <Button 
                      href={(isDaiquiri || process.env.NODE_ENV === 'development') ? "/projects" : "https://daiquiri.dev/projects"} 
                      variant="tertiary" 
                      size="s"
                      target="_self"
                    >
                      {t("nav.projects")}
                    </Button>
                    <Button 
                      href={(!isDaiquiri || process.env.NODE_ENV === 'development') ? "/resume" : "https://dagkanbayramoglu.com/resume"} 
                      variant="tertiary" 
                      size="s"
                      target="_self"
                    >
                      {t("nav.career")}
                    </Button>
                  </Row>
                </div>

                <div className="hide-desktop">
                  <NavIcon
                    isActive={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </div>
              </Row>

              <div className="hide-mobile">
                <Row vertical="center" gap="8">
                  <div style={{ position: 'relative' }} ref={settingsRef}>
                    <IconButton
                      id="settings-toggle"
                      size="s"
                      variant="tertiary"
                      icon="settings"
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    />
                    <AnimatePresence>
                      {isSettingsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 12px)',
                            right: 0,
                            zIndex: 10,
                            pointerEvents: 'auto'
                          }}
                        >
                          <ThemeSwitcher />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Row>
              </div>
            </Row>
          </Flex>
        </Row>

        {/* Now Playing Layer */}
        <AnimatePresence>
          {track && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="hide-mobile"
              style={{
                pointerEvents: "auto",
                paddingLeft: "12px",
                paddingRight: "16px",
                background: theme === "light" ? "rgba(240, 240, 240, 0.9)" : "var(--neutral-background-medium)",
                backdropFilter: "blur(16px)",
                height: "40px",
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                border: "1px solid var(--neutral-alpha-weak)",
                boxShadow: "var(--shadow-elevation-dark-one)",
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
                      width: "24px",
                      height: "24px",
                      overflow: "hidden",
                      border: "1px solid var(--neutral-alpha-weak)",
                    }}
                  >
                    <img
                      src={track.image.find((img) => img.size === "small")?.["#text"] || track.image[0]["#text"]}
                      alt="Album Art"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Flex>

                  <div style={{ height: "20px", display: "flex", alignItems: "center", width: "240px", overflow: "hidden" }}>
                    <Text
                      variant="label-strong-s"
                      style={{ 
                        color: "var(--neutral-on-background-strong)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {track.name} — {track.artist["#text"]}
                    </Text>
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
                    <Text variant="code-default-xs" style={{ color: "#d51007", fontWeight: "bold", fontSize: "10px" }}>
                      NOW PLAYING
                    </Text>
                  </Flex>
                </Flex>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
};
