"use client";

import React, { useState, useEffect } from "react";
import { Flex, Text, IconButton, ToggleButton, Line } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";
import * as analytics from "@/lib/analytics";

export const ThemeSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme);
    analytics.trackThemeChange(newTheme);
  };

  return (
    <Flex
      direction="column"
      padding="16"
      radius="l"
      background="surface"
      border="neutral-alpha-weak"
      gap="16"
      style={{
        boxShadow: "var(--shadow-elevation-dark-three)",
        minWidth: "200px",
      }}
    >
      <Flex direction="column" gap="8">
        <Text variant="label-strong-s" onBackground="neutral-weak">Language</Text>
        <Flex background="neutral-alpha-weak" radius="m" padding="2" fillWidth>
          <ToggleButton
            id="lang-en-switcher"
            size="s"
            fillWidth
            selected={language === "en"}
            onClick={() => {
              setLanguage("en");
              analytics.trackLanguageChange("en");
            }}
          >
            English
          </ToggleButton>
          <ToggleButton
            id="lang-tr-switcher"
            size="s"
            fillWidth
            selected={language === "tr"}
            onClick={() => {
              setLanguage("tr");
              analytics.trackLanguageChange("tr");
            }}
          >
            Türkçe
          </ToggleButton>
        </Flex>
      </Flex>

      <Line background="neutral-alpha-weak" />

      <Flex direction="column" gap="8">
        <Text variant="label-strong-s" onBackground="neutral-weak">Theme</Text>
        <Flex background="neutral-alpha-weak" radius="m" padding="2" fillWidth>
          <ToggleButton
            id="theme-light"
            size="s"
            fillWidth
            selected={theme === "light"}
            onClick={() => toggleTheme("light")}
          >
            Light
          </ToggleButton>
          <ToggleButton
            id="theme-dark"
            size="s"
            fillWidth
            selected={theme === "dark"}
            onClick={() => toggleTheme("dark")}
          >
            Dark
          </ToggleButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
