"use client";

import React from "react";
import { Flex, Heading, Background, Text } from "@once-ui-system/core";

interface ProjectBannerProps {
  title: string;
  description?: string;
  tags?: string[];
}

export const ProjectBanner: React.FC<ProjectBannerProps> = ({ title, description, tags }) => {
  return (
    <Flex
      fillWidth
      fillHeight
      center
      position="relative"
      padding="32"
      style={{
        overflow: "hidden",
        background: "var(--brand-alpha-weak)",
        minHeight: "200px",
      }}
    >
      <Background
        gradient={{
          display: true,
          opacity: 40,
          x: 50,
          y: 50,
          width: 100,
          height: 100,
          tilt: 0,
          colorStart: "brand-background-strong",
          colorEnd: "static-transparent",
        }}
        dots={{
          display: true,
          opacity: 20,
          size: "2",
        }}
      />
      <Flex direction="column" center gap="16" style={{ zIndex: 1, textAlign: "center" }}>
        <Heading variant="display-strong-xs" onBackground="brand-strong">
          {title}
        </Heading>
        {tags && tags.length > 0 && (
          <Flex gap="8" wrap center>
            {tags.slice(0, 3).map((tag) => (
              <Text key={tag} variant="code-default-xs" onBackground="brand-weak" style={{ opacity: 0.6 }}>
                #{tag}
              </Text>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
