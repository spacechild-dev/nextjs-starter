"use client";

import { Flex, Button, Text, ToggleButton, Row } from "@once-ui-system/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Flex
      as="header"
      fillWidth
      paddingX="l"
      paddingY="m"
      horizontal="center"
      position="fixed"
      zIndex={3}
    >
      <Flex
        background="neutral-alpha-medium"
        radius="l"
        border="neutral-alpha-weak"
        padding="s"
        vertical="center"
        style={{
          backdropFilter: 'blur(16px)',
          boxShadow: 'var(--shadow-elevation-dark-two)',
        }}
      >
        <Row vertical="center" gap="16">
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Text variant="body-default-s" weight="strong">Dağkan</Text>
            </Link>
            
            {/* Navigation Items (Placeholder for MegaMenu) */}
            <Row gap="8" s={{ display: 'none' }}>
                <Button href="/about" variant="tertiary" size="s">About</Button>
                <Button href="/work" variant="tertiary" size="s">Work</Button>
            </Row>

            {/* Theme Toggle */}
            <Flex background="neutral-alpha-weak" radius="full" padding="2" vertical="center">
                 <ToggleButton
                    prefixIcon="moon" // Assuming standard icon names
                    selected={false} // Logic needs to be hooked up to provider
                    onClick={() => {
                        const root = document.documentElement;
                        const current = root.getAttribute('data-theme');
                        root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
                    }}
                 />
            </Flex>
        </Row>
      </Flex>
    </Flex>
  );
};
