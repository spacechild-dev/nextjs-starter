import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { 
    Heading, 
    Text, 
    Column, 
    Flex, 
    Row, 
    Button, 
    Line, 
    Scroller
} from "@once-ui-system/core";
import { HiOutlineArrowLeft, HiOutlineCheckCircle } from "react-icons/hi2";
import { CodeBlock } from "@/components/CodeBlock";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const components = {
    code: (props: any) => {
        const isInline = !props.className;
        if (isInline) {
            return <code style={{ background: 'var(--neutral-alpha-weak)', padding: '2px 6px', borderRadius: '4px' }} {...props} />;
        }
        const language = props.className?.replace('language-', '') || 'text';
        return (
            <CodeBlock
                className="my-16"
                codes={[{
                    language: language,
                    label: language,
                    code: props.children.trim()
                }]}
            />
        );
    },
  };

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" fillWidth gap="64">
        {/* Back Link */}
        <Link href="/projects" style={{ textDecoration: 'none' }}>
            <Row vertical="center" gap="8">
                <HiOutlineArrowLeft size={16} className="text-neutral-weak" />
                <Text variant="label-strong-s" onBackground="neutral-weak">Back to Projects</Text>
            </Row>
        </Link>

        {/* Top Row: App Info (Left) & Featured Image (Right) */}
        <Row gap="48" vertical="center" wrap>
            <Column flex={1} gap="24" style={{ minWidth: '300px' }}>
                <Column gap="12">
                    <Heading variant="display-strong-m">{project.title}</Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak">{project.description}</Text>
                </Column>
                <Flex gap="8" wrap vertical="center">
                    <Text variant="label-strong-xs" onBackground="neutral-strong">BUILT WITH:</Text>
                    {project.tags.map((tag) => (
                        <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="brand-alpha-weak">
                            <Text variant="code-default-xs" onBackground="brand-strong">#{tag}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Row gap="12">
                    {project.href && <Button href={project.href} variant="primary" size="s">Visit Live</Button>}
                    {project.github && <Button href={project.github} variant="secondary" size="s">Source</Button>}
                </Row>
            </Column>
            <Flex flex={1} style={{ minWidth: '300px' }}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-alpha-weak shadow-xl bg-surface">
                    {project.img ? (
                        <Image src={project.img} alt={project.title} fill className="object-cover" />
                    ) : (
                        <Flex fillWidth fillHeight center>
                            <Text onBackground="neutral-weak" variant="code-default-s">Image Placeholder</Text>
                        </Flex>
                    )}
                </div>
            </Flex>
        </Row>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
            <Column gap="24">
                <Heading variant="heading-strong-l">Key Features</Heading>
                <Line background="neutral-alpha-weak" />
                <Row gap="24" wrap>
                    {project.keyFeatures.map((feature, index) => (
                        <Flex key={index} padding="24" radius="l" background="surface" border="neutral-alpha-weak" gap="12" vertical="center" style={{ flex: '1 1 200px' }}>
                            <HiOutlineCheckCircle size={20} className="text-emerald-500 shrink-0" />
                            <Text variant="label-strong-s">{feature}</Text>
                        </Flex>
                    ))}
                </Row>
            </Column>
        )}

        {/* Detailed Overview (MDX) */}
        <Column gap="24">
            <Heading variant="heading-strong-l">Detailed Overview</Heading>
            <Line background="neutral-alpha-weak" />
            <div className="prose prose-neutral dark:prose-invert max-w-none" style={{ color: 'var(--neutral-on-background-medium)' }}>
                <MDXRemote source={project.content} components={components as any} />
            </div>
        </Column>

        {/* App Screenshots Scroller */}
        <Column gap="24">
            <Heading variant="heading-strong-l">Screenshots</Heading>
            <Line background="neutral-alpha-weak" />
            <Scroller fillWidth gap="16" paddingBottom="12">
                {/* Real Screenshots */}
                {project.screenshots && project.screenshots.map((ss, i) => (
                    <div key={i} style={{ minWidth: '400px' }} className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-alpha-weak shadow-md bg-surface">
                        <Image src={ss} alt={`Screenshot ${i + 1}`} fill className="object-cover" />
                    </div>
                ))}
                {/* Placeholders if no/few screenshots */}
                {(!project.screenshots || project.screenshots.length < 3) && [1, 2, 3].map((_, i) => (
                    <Flex key={i} style={{ minWidth: '400px', aspectRatio: '16/9' }} background="surface" border="neutral-alpha-weak" radius="l" center>
                        <Text onBackground="neutral-weak">Screenshot Placeholder {i + 1}</Text>
                    </Flex>
                ))}
            </Scroller>
        </Column>
      </Column>
    </Column>
  );
}
