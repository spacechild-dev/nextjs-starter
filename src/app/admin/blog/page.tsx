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
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (error) addToast({ message: "Veriler çekilemedi.", variant: "danger" });
    else setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <Column fillWidth padding="48" gap="32">
      <Row horizontal="between" vertical="center" fillWidth>
        <Row vertical="center" gap="12">
          <Button variant="tertiary" size="s" prefixIcon="chevronLeft" onClick={() => router.push("/admin/dashboard")} />
          <Heading variant="display-strong-s">Blog Yönetimi</Heading>
        </Row>
        <Button variant="primary" size="s" prefixIcon="plus">Yeni Yazı</Button>
      </Row>
      <Line background="neutral-alpha-weak" />
      {loading ? <Text>Yükleniyor...</Text> : (
        <Flex direction="column" gap="12" fillWidth>
          {posts.map((post) => (
            <Flex key={post.id} padding="24" radius="l" background="surface" border="neutral-alpha-weak" horizontal="between" vertical="center">
              <Column gap="4">
                <Heading variant="heading-strong-m">{post.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">{post.date}</Text>
              </Column>
              <Badge variant={post.status === 'published' ? 'brand' : 'neutral'} size="s">{post.status}</Badge>
            </Flex>
          ))}
        </Flex>
      )}
    </Column>
  );
}
