"use client";

import { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Column,
  Flex,
  Avatar,
  RevealFx,
  Dialog,
  Input,
  Textarea
} from "@once-ui-system/core";
import { NowPlaying } from "@/components/NowPlaying";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Clear URL parameters
    if (window.location.search) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: newUrl }, "", newUrl);
    }
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dagkanbayramoglu/",
      icon: "linkedin" 
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i",
      icon: "spotify"
    },
    {
      name: "Last.fm",
      href: "https://www.last.fm/user/dagkan/listening-report/year",
      icon: "lastfm" // Assuming icon exists or will default
    },
    {
      name: "Discogs",
      href: "https://www.discogs.com/user/dagkanbayramoglu/collection",
      icon: "discogs" // Assuming icon exists
    }
  ];

  return (
    <Column fillWidth center padding="l" gap="l" style={{ minHeight: "100vh" }}>
      <RevealFx translateY="16">
        <Column maxWidth="s" horizontal="center" gap="l" align="center">
          
          <Avatar 
            src="/images/og/home.jpg" 
            size="xl" 
            style={{ border: '1px solid var(--neutral-alpha-medium)' }}
          />

          <Heading variant="display-strong-l" align="center">
            Dağkan Bayramoğlu
          </Heading>
          
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
          >
            Digital Product Designer & Developer. 
            Building intuitive and beautiful web experiences.
          </Text>

          <Flex gap="16" wrap center>
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                href={link.href}
                variant="tertiary"
                size="m"
              >
                {link.name}
              </Button>
            ))}
          </Flex>

          <Button 
            variant="primary" 
            onClick={() => setIsContactOpen(true)}
            prefixIcon="email"
          >
            Contact
          </Button>

          <Column fillWidth marginTop="l">
             <Text variant="label-default-s" marginBottom="8" onBackground="neutral-weak">Now Playing</Text>
             <NowPlaying />
          </Column>

        </Column>
      </RevealFx>

      <Dialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Get in Touch"
        description="Drop me a message and let's start a conversation."
        style={{ maxWidth: '400px' }}
      >
        <Flex direction="column" gap="16" padding="16">
            <Input
                id="contact-email"
                label="Email"
                placeholder="your@email.com"
                type="email"
            />
            <Textarea
                id="contact-message"
                label="Message"
                placeholder="What's on your mind?"
                lines={4}
            />
            <Button variant="primary" fillWidth onClick={() => setIsContactOpen(false)}>
                Send Message
            </Button>
        </Flex>
      </Dialog>
    </Column>
  );
}