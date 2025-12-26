"use client";

import { Flex, Text } from "@once-ui-system/core";
import Image from "next/image";

export const NowPlaying = () => {
  return (
    <Flex
      fillWidth
      padding="s"
      gap="12"
      background="neutral-alpha-weak"
      radius="l"
      direction="row"
      vertical="center"
      style={{
        border: "1px solid var(--neutral-alpha-medium)",
      }}
    >
      <div style={{ position: 'relative', width: 48, height: 48, borderRadius: 'var(--radius-m)', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src="/images/og/home.jpg" // Placeholder
          alt="Album Art"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Flex direction="column">
        <Text variant="body-strong-s">Not Playing</Text>
        <Text variant="body-default-xs" onBackground="neutral-weak">Spotify</Text>
      </Flex>
    </Flex>
  );
};
