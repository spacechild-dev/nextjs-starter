"use client";

import React from "react";
import { Heading, Text, Button, Column, Flex, Row, Background, Icon } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { Martini, Coffee, Heart, Globe, Github } from "lucide-react";

export default function DaiquiriPage() {
  return (
    <Column
      fillWidth
      horizontal="center"
      vertical="center"
      paddingX="l"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
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

      {/* Floating Icons Animation */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: Math.random() * 1000, 
              x: Math.random() * 1000, 
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ position: 'absolute', fontSize: '24px' }}
          >
            {i % 2 === 0 ? "🍹" : "🍸"}
          </motion.div>
        ))}
      </div>

      <Column maxWidth="s" horizontal="center" gap="48" style={{ zIndex: 1, textAlign: 'center' }}>
        <Flex
          background="brand-alpha-weak"
          padding="24"
          radius="full"
          border="brand-alpha-medium"
          style={{ marginBottom: '-24px' }}
        >
          <Martini size={48} className="text-brand-strong" />
        </Flex>

        <Column gap="16">
          <Heading variant="display-strong-m">Cheers!</Heading>
          <Text variant="body-default-l" onBackground="neutral-strong">
            Projelerimi ve içeriklerimi seviyorsan, gelişimime destek olmak için bana bir Daiquiri (veya kahve) ısmarlayabilirsin.
          </Text>
        </Column>

        <Flex gap="16" wrap horizontal="center" fillWidth>
          <Button
            href="https://buymeacoffee.com/dagkan"
            size="l"
            fillWidth
            style={{ backgroundColor: "#FFDD00", color: "#000000", border: 'none' }}
          >
            <Coffee size={20} style={{ marginRight: '8px' }} />
            Buy Me a Coffee
          </Button>
          
          <Button
            href="https://github.com/sponsors/spacechild-dev"
            variant="secondary"
            size="l"
            fillWidth
          >
            <Github size={20} style={{ marginRight: '8px' }} />
            GitHub Sponsors
          </Button>
        </Flex>

        <Row gap="24" vertical="center" marginTop="32">
          <Button
            href="https://dagkanbayramoglu.com"
            variant="tertiary"
            size="s"
            prefixIcon="chevronLeft"
          >
            Ana Siteye Dön
          </Button>
        </Row>

        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ opacity: 0.5 }}>
          Desteğin için teşekkürler. Her yudumda seni anacağım! 🍹
        </Text>
      </Column>
    </Column>
  );
}
