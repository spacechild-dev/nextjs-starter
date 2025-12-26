import React from "react";
import {
    Heading,
    Text,
    Column,
    Flex,
    Row,
    Line,
    CodeBlock
} from "@once-ui-system/core";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { headers } from "next/headers";

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const headerList = await headers();
    const host = headerList.get("host") || "";
    const isTr = host.endsWith(".tr");
    const lang = isTr ? "tr" : "en";

    // Try to load language specific file first
    let filePath = path.join(process.cwd(), "src/content/blog", `${slug}-${lang}.mdx`);
    
    if (!fs.existsSync(filePath)) {
        // Fallback to default slug if exists, or en
        filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
        if (!fs.existsSync(filePath)) {
            filePath = path.join(process.cwd(), "src/content/blog", `${slug}-en.mdx`);
        }
    }
    
    if (!fs.existsSync(filePath)) {
        return <Column fillWidth center padding="128"><Text>Post not found</Text></Column>;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const components = {
        h1: (props: any) => <Heading variant="display-strong-s" marginBottom="16" {...props} />,
        h2: (props: any) => <Heading variant="display-strong-xs" marginTop="32" marginBottom="16" {...props} />,
        h3: (props: any) => <Heading variant="heading-strong-l" marginTop="24" marginBottom="12" {...props} />,
        h4: (props: any) => <Heading variant="heading-strong-m" marginTop="20" marginBottom="8" {...props} />,
        p: (props: any) => <Text variant="body-default-m" onBackground="neutral-medium" marginBottom="16" {...props} style={{ lineHeight: '1.8' }} />,
        ul: (props: any) => <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', color: 'var(--neutral-on-background-medium)' }} {...props} />,
        li: (props: any) => <li style={{ marginBottom: '8px' }} {...props} />,
        code: (props: any) => {
            const isInline = !props.className;
            if (isInline) {
                return <code style={{ background: 'var(--neutral-alpha-weak)', padding: '2px 6px', borderRadius: '4px' }} {...props} />;
            }
            const language = props.className?.replace('language-', '') || 'text';
            return (
                <CodeBlock
                    className="my-16"
                    codes={[
                        {
                            language: language,
                            label: language,
                            code: props.children.trim()
                        }
                    ]}
                />
            );
        },
        pre: (props: any) => <div {...props} />,
        strong: (props: any) => <strong style={{ fontWeight: 'bold', color: 'var(--neutral-on-background-strong)' }} {...props} />
    };

    return (
        <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
            <Column maxWidth="s" fillWidth gap="32">
                <Link href="/blog" style={{ textDecoration: 'none' }}>
                    <Row vertical="center" gap="8" horizontal="start">
                        <HiOutlineArrowLeft size={16} />
                        <Text variant="label-strong-s" onBackground="neutral-weak">
                            {lang === "tr" ? "Blog'a Dön" : "Back to Blog"}
                        </Text>
                    </Row>
                </Link>

                <Column gap="12">
                    <Text variant="code-default-s" onBackground="neutral-weak">{data.date}</Text>
                    <Heading variant="display-strong-m">{data.title}</Heading>
                    <Flex gap="8" wrap>
                        {data.tags?.map((tag: string) => (
                            <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                                <Text variant="code-default-xs">#{tag}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Column>

                <Line background="neutral-alpha-weak" />

                <Column gap="24">
                    <MDXRemote source={content} components={components} />
                    
                    <Text variant="body-default-m" onBackground="neutral-weak" marginTop="32">
                        {lang === "tr" ? "Bir sonraki makalede görüşmek üzere." : "See you in the next post."}
                    </Text>
                </Column>
            </Column>
        </Column>
    );
}
