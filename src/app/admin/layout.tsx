"use client";

import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import { fonts } from "@/resources/once-ui.config";
import { Flex, Column, Background, ToastProvider } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="tr"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <title>Admin Paneli - Dağkan Bayramoğlu</title>
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
          <Background
            gradient={{
              display: true,
              opacity: 50,
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              tilt: 0,
              colorStart: "brand-background-weak",
              colorEnd: "static-transparent",
            }}
          />
          {children}
        </Column>
      </Providers>
    </Flex>
  );
}
