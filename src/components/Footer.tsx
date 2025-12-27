"use client";

import React from "react";
import { Flex, Text, Button } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="32"
      horizontal="center"
      vertical="center"
      gap="16"
      wrap
    >
      <Text variant="body-default-s" onBackground="neutral-weak">
        &copy; {year} Dağkan Bayramoğlu. All rights reserved.
      </Text>
      <Button href="/privacy-policy" variant="tertiary" size="s">
        Privacy Policy
      </Button>
    </Flex>
  );
};
