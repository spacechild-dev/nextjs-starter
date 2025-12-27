"use client";

import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Column,
  Row,
  Line,
  Badge,
  useToast,
} from "@once-ui-system/core";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      addToast({ message: "Veriler çekilemedi.", variant: "danger" });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Column fillWidth padding="48" gap="32">
      <Row horizontal="between" vertical="center" fillWidth>
        <Column gap="8">
          <Row vertical="center" gap="12">
            <Button 
              variant="tertiary" 
              size="s" 
              prefixIcon="chevronLeft" 
              onClick={() => router.push("/admin/dashboard")}
            >
              Geri
            </Button>
            <Heading variant="display-strong-s">Blog Yönetimi</Heading>
          </Row>
        </Column>
        <Button variant="primary" size="s" prefixIcon="plus">Yeni Yazı Ekle</Button>
      </Row>

      <Line background="neutral-alpha-weak" />

      {loading ? (
        <Text>Yükleniyor...</Text>
      ) : (
        <Flex direction="column" gap="12" fillWidth>
          {posts.length === 0 ? (
            <Flex padding="48" center background="surface" radius="l" border="neutral-alpha-weak">
              <Text onBackground="neutral-weak">Henüz hiç yazı eklenmemiş.</Text>
            </Flex>
          ) : (
            posts.map((post) => (
              <Flex
                key={post.id}
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                horizontal="between"
                vertical="center"
              >
                <Column gap="4">
                  <Heading variant="heading-strong-m">{post.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{post.date}</Text>
                </Column>
                <Row gap="12" vertical="center">
                  <Badge variant={post.status === 'published' ? 'brand' : 'neutral'} size="s">
                    {post.status}
                  </Badge>
                  <Button variant="tertiary" size="s" prefixIcon="edit">Düzenle</Button>
                </Row>
              </Flex>
            ))
          )}
        </Flex>
      )}
    </Column>
  );
}