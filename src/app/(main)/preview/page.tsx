"use client";

import React from "react";
import { Heading, Text, Column, Flex, Row, Pulse, Background } from "@once-ui-system/core";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { motion, AnimatePresence } from "framer-motion";

export default function PreviewPage() {
  const { track } = useNowPlaying();

  if (!track) return <Column fillWidth center padding="128"><Text>No track playing</Text></Column>;

  return (
    <Column fillWidth horizontal="center" paddingY="128" gap="64">
      <Heading variant="display-strong-s">Now Playing Alternatives</Heading>

      {/* Alternative 1: Pulse Dot (Menu Style) */}
      <Column gap="16" horizontal="center">
        <Text variant="label-strong-m">1. Pulse Dot Popover (Menu Style)</Text>
        <Flex
          padding="12"
          radius="full"
          background="surface"
          border="neutral-alpha-weak"
          vertical="center"
          gap="12"
        >
          <Text variant="label-strong-s">Menu Item</Text>
          <Line vert height="12" />
          <div style={{ position: 'relative' }}>
            <Pulse variant="success" size="s" />
            <div style={{ position: 'absolute', top: '100%', right: 0, paddingTop: '12px' }}>
               <NowPlayingPopup track={track} />
            </div>
          </div>
        </Flex>
      </Column>

      {/* Alternative 2: Inline Text (Always Visible) */}
      <Column gap="16" horizontal="center">
        <Text variant="label-strong-m">2. Inline Text (Always Visible)</Text>
        <Flex
          paddingX="16"
          paddingY="8"
          radius="full"
          background="surface"
          border="neutral-alpha-weak"
          vertical="center"
          gap="12"
        >
          <Flex
            radius="xs"
            style={{ width: "24px", height: "24px", overflow: "hidden" }}
          >
            <img src={track.image[0]["#text"]} alt="Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Flex>
          <Text variant="label-strong-s">
            {track.name} — {track.artist["#text"]}
          </Text>
          <Pulse variant="success" size="xs" />
        </Flex>
      </Column>

      {/* Alternative 3: Corner Floating Pill */}
      <Column gap="16" horizontal="center">
        <Text variant="label-strong-m">3. Corner Floating Pill (Bottom Right)</Text>
        <div style={{ border: '1px dashed var(--neutral-alpha-medium)', padding: '40px', position: 'relative' }}>
            <Flex
                position="absolute"
                style={{ bottom: '16px', right: '16px' }}
                padding="8"
                radius="full"
                background="surface"
                border="neutral-alpha-weak"
                vertical="center"
                gap="8"
            >
                <Pulse variant="success" size="xs" />
                <Text variant="label-strong-xs">Now Playing</Text>
            </Flex>
        </div>
      </Column>
    </Column>
  );
}

const NowPlayingPopup = ({ track }: { track: any }) => (
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
        src={track.image.find((img: any) => img.size === "small")?.["#text"] || track.image[0]["#text"]}
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
);

const Line = ({ vert, height }: { vert?: boolean, height?: string }) => (
    <div style={{ 
        width: vert ? '1px' : '100%', 
        height: vert ? (height || '100%') : '1px', 
        background: 'var(--neutral-alpha-weak)' 
    }} />
);
