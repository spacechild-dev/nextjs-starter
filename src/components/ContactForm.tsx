"use client";

import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  Input,
  Textarea,
  Dialog,
  Heading,
  Text,
  useToast,
} from "@once-ui-system/core";
import * as analytics from "@/lib/analytics";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    message: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("contact_info");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
          company: parsed.company || "",
          position: parsed.position || "",
        }));
      } catch (e) {
        console.error("Failed to parse saved contact info", e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://n8n.daiquiri.dev/webhook/dagkanbayramoglu.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "dagkanbayramoglu.com",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Track event
        analytics.trackContactFormSubmission({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          position: formData.position,
        });

        // Store in localStorage (for future auto-fill)
        localStorage.setItem(
          "contact_info",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            position: formData.position,
          }),
        );

        addToast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
          variant: "success",
        });

        onClose();
        setFormData((prev) => ({ ...prev, message: "" })); // Clear message only
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Flex direction="column" gap="24" padding="8">
        <Flex direction="column" gap="8">
          <Heading variant="heading-strong-l">Get in Touch</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Fill out the form below and I'll get back to you shortly.
          </Text>
        </Flex>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Flex direction="column" gap="16">
            <Flex gap="16" wrap>
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fillWidth
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fillWidth
              />
            </Flex>
            <Flex gap="16" wrap>
              <Input
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                fillWidth
              />
              <Input
                label="Position (Optional)"
                name="position"
                value={formData.position}
                onChange={handleChange}
                fillWidth
              />
            </Flex>
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              fillWidth
              style={{ minHeight: "120px" }}
            />
            <Flex horizontal="end" marginTop="8">
              <Button type="submit" variant="primary" loading={loading} fillWidth>
                Send Message
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Dialog>
  );
}
