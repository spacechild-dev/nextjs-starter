import React from "react";
import Link from "next/link";
import { Heading, Text, Column, Flex } from "@once-ui-system/core";
import { getAllProjects } from "@/lib/projects";
import { FaSpotify, FaShieldAlt, FaVolumeUp } from "react-icons/fa";
import { ProjectBanner } from "@/components/ProjectBanner";

export default function ProjectsPage() {
  const projects = getAllProjects();

  const getIcon = (slug: string) => {
    if (slug.includes("spotify")) return <FaSpotify size={20} style={{ color: "var(--brand-solid-strong)" }} />;
    if (slug.includes("audio")) return <FaVolumeUp size={20} style={{ color: "var(--brand-solid-strong)" }} />;
    return <FaShieldAlt size={20} style={{ color: "var(--brand-solid-strong)" }} />;
  };

  return (
    <Column
      fillWidth
      horizontal="center"
      paddingY="128"
      paddingX="l"
      style={{ minHeight: "100vh" }}
    >
      <Column maxWidth="s" fillWidth gap="l">
        <Column gap="12" marginBottom="32">
          <Heading variant="display-strong-s">Projects</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            A collection of my web apps, tools, and experiments.
          </Text>
        </Column>

        <Flex gap="24" wrap>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none", flex: "1 1 300px" }}
            >
              <Flex
                direction="column"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                  {project.img ? (
                    <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <ProjectBanner title={project.title} tags={project.tags} />
                  )}
                </div>
                <Flex direction="column" padding="24" gap="16">
                  <Flex vertical="center" gap="12">
                    <Flex padding="8" radius="m" background="neutral-alpha-weak">
                      {getIcon(project.slug)}
                    </Flex>
                    <Heading variant="heading-strong-s">{project.title}</Heading>
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {project.description}
                  </Text>
                  <Flex gap="8" wrap marginTop="16">
                    {project.tags.map((tag) => (
                      <Flex
                        key={tag}
                        paddingX="8"
                        paddingY="4"
                        radius="m"
                        background="neutral-alpha-weak"
                      >
                        <Text variant="code-default-xs">#{tag}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
