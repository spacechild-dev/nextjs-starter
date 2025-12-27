"use client";

import React from "react";
import { Flex, Text, Column, Row } from "@once-ui-system/core";

interface TimelineItem {
  label: string;
  description: string | React.ReactNode;
  state?: "completed" | "active" | "default";
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <Column fillWidth gap="0">
      {items.map((item, index) => (
        <Row key={index} gap="24" vertical="start">
          <Column horizontal="center" style={{ width: "12px" }} gap="0">
            <Flex
              radius="full"
              style={{
                width: "12px",
                height: "12px",
                background:
                  item.state === "completed"
                    ? "var(--brand-solid-strong)"
                    : item.state === "active"
                      ? "var(--brand-alpha-strong)"
                      : "var(--neutral-alpha-medium)",
                marginTop: "6px",
                zIndex: 1,
              }}
            />
            {index !== items.length - 1 && (
              <div
                style={{
                  width: "2px",
                  flexGrow: 1,
                  background: "var(--neutral-alpha-weak)",
                  minHeight: "40px",
                }}
              />
            )}
          </Column>
          <Column gap="4" paddingBottom="32" flex={1}>
            <Text variant="label-strong-s" onBackground="neutral-weak" style={{ fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase' }}>
              {item.label}
            </Text>
            <div style={{ color: "var(--neutral-on-background-strong)" }}>
              {item.description}
            </div>
          </Column>
        </Row>
      ))}
    </Column>
  );
};
