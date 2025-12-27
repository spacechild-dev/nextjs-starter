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
  Pulse,
  Column,
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
  const [isNowPlayingOpen, setIsNowPlayingOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDaiquiri(window.location.hostname.includes("daiquiri"));
    }
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

  const menuItems = [
    { label: t("nav.blog"), href: "/blog" },
    { 
      label: t("nav.projects"), 
      href: isDaiquiri ? "/projects" : "https://daiquiri.dev/projects" 
    },
    { 
      label: t("nav.career"), 
      href: !isDaiquiri ? "/resume" : "https://dagkanbayramoglu.com/resume" 
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
      <Column fillWidth horizontal="center" gap="8">
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
              overflow: "visible", // Allowed popovers to show
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
                    {menuItems.map((item) => (
                      <Button 
                        key={item.href} 
                        href={item.href} 
                        variant="tertiary" 
                        size="s"
                        target="_self"
                      >
                        {item.label}
                      </Button>
                    ))}
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
                <Row vertical="center" gap="12">
                  {/* Now Playing Pulse Wrapper */}
                  {track && (
                    <div 
                      style={{ position: 'relative', height: '48px', display: 'flex', alignItems: 'center' }} 
                      onMouseEnter={() => setIsNowPlayingOpen(true)}
                      onMouseLeave={() => setIsNowPlayingOpen(false)}
                    >
                      <Pulse variant="success" size="s" style={{ cursor: 'pointer' }} />
                      <AnimatePresence>
                        {isNowPlayingOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: -40,
                              zIndex: 10,
                              paddingTop: '12px',
                              pointerEvents: 'auto'
                            }}
                          >
                            <Flex
                              padding="12"
                              radius="l"
                              background="surface"
                              border="neutral-alpha-weak"
                              style={{ boxShadow: "var(--shadow-elevation-dark-three)", minWidth: "240px" }}
                              vertical="center"
                              gap="12"
                            >
                              <Flex
                                radius="xs"
                                style={{
                                  width: "40px",
                                  height: "40px",
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
                              <Column gap="2" style={{ overflow: 'hidden' }}>
                                <Text variant="label-strong-s" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {track.name}
                                </Text>
                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                  {track.artist["#text"]}
                                </Text>
                              </Column>
                            </Flex>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Settings Wrapper */}
                  <div 
                    style={{ position: 'relative', height: '48px', display: 'flex', alignItems: 'center' }} 
                    onMouseEnter={() => setIsSettingsOpen(true)}
                    onMouseLeave={() => setIsSettingsOpen(false)}
                  >
                    <IconButton
                      id="settings-toggle"
                      size="s"
                      variant="tertiary"
                      icon="settings"
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
                            top: '100%',
                            right: 0,
                            zIndex: 10,
                            paddingTop: '12px',
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

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%', maxWidth: '320px', pointerEvents: 'auto' }}
            >
              <Column 
                padding="16" 
                background="surface" 
                border="neutral-alpha-weak"
                radius="l" 
                fillWidth
                gap="8"
                style={{ backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-elevation-dark-two)' }}
              >
                <Button fillWidth horizontal="start" size="l" variant="tertiary" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Button>
                {menuItems.map((item) => (
                  <Button 
                    key={item.href}
                    fillWidth 
                    horizontal="start" 
                    size="l" 
                    variant="tertiary" 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                ))}
                
                <Line background="neutral-alpha-weak" marginY="8" />
                
                <Flex paddingX="8" vertical="center" horizontal="between">
                  <Text variant="label-strong-s" onBackground="neutral-weak">Theme</Text>
                  <IconButton
                    size="s"
                    variant="tertiary"
                    icon={theme === "dark" ? "sun" : "moon"}
                    onClick={toggleTheme}
                  />
                </Flex>
              </Column>
            </motion.div>
          )}
        </AnimatePresence>
      </Column>
    </Flex>
  );
};
