"use client";

import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import { fonts } from "@/resources/once-ui.config";
import { Flex, Column, Background } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";

export default function DaiquiriLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <title>Daiquiri.dev - Support Dağkan</title>
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          margin="0"
          padding="0"
          style={{ minHeight: "100vh" }}
        >
          {children}
        </Column>
      </Providers>
    </Flex>
  );
}
