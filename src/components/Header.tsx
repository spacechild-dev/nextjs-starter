"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    MegaMenu,
    MobileMegaMenu,
    Dialog,
    Button,
    Input,
    Textarea,
    IconButton,
    ToggleButton,
    Line,
    NavIcon
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const pathname = usePathname();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [isHomeHovered, setIsHomeHovered] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('data-theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
    };

    const menuGroups = [
        {
            id: "blog",
            label: t("nav.blog"),
            sections: [
                {
                    title: t("nav.topics"),
                    links: [
                        {
                            label: t("nav.allPosts"),
                            href: "/blog",
                            icon: "document",
                            description: "Read everything",
                        },
                        {
                            label: t("nav.digitalMarketing"),
                            href: "/blog?tag=marketing",
                            icon: "target",
                            description: "Performance & Strategy",
                        },
                        {
                            label: t("nav.tracking"),
                            href: "/blog?tag=tracking",
                            icon: "chart",
                            description: "Analytics & Data",
                        },
                    ],
                },
            ],
        },
        {
            id: "projects",
            label: t("nav.projects"),
            sections: [
                {
                    title: "Explore",
                    links: [
                        {
                            label: "All Projects",
                            href: "/projects",
                            icon: "layers",
                            description: "View all case studies",
                        },
                        {
                            label: "Web Apps",
                            href: "/projects?type=web",
                            icon: "globe",
                            description: "Next.js & React apps",
                        },
                        {
                            label: "Docker Apps",
                            href: "/projects?type=docker",
                            icon: "cube",
                            description: "Self-hosted solutions",
                        },
                        {
                            label: "Chrome Apps",
                            href: "/projects?type=chrome",
                            icon: "puzzle",
                            description: "Browser extensions",
                        },
                    ],
                },
            ],
        },
        {
            id: "career",
            label: t("nav.career"),
            sections: [
                {
                    title: "Professional",
                    links: [
                        {
                            label: t("nav.experience"),
                            href: "/resume#experience",
                            icon: "briefcase",
                            description: "Work history",
                        },
                        {
                            label: t("nav.certificates"),
                            href: "/resume#certificates",
                            icon: "book",
                            description: "Skills & Badges",
                        },
                    ],
                },
            ],
        }
    ];

    return (
        <>
            {/* Minimal Beta Badge - Fixed Bottom Right */}
            <Flex 
                paddingX="12" 
                paddingY="4" 
                radius="full" 
                background="neutral-strong"
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: 'fit-content',
                    zIndex: 1000,
                    opacity: 0.5,
                    border: '1px solid var(--neutral-alpha-weak)',
                }}
            >
                <Text variant="code-default-xs" onBackground="neutral-strong">
                    BETA
                </Text>
            </Flex>

            <Flex
                as="header"
                fillWidth
                paddingTop="16"
                paddingX="24"
                horizontal="center"
                style={{
                    position: 'fixed',
                    top: 0,
                    zIndex: 100,
                    pointerEvents: 'none'
                }}
            >
                <Row vertical="center" gap="0" style={{ pointerEvents: 'auto', position: 'relative' }}>
                    {/* BETA Label - Concave Effect */}
                    <Flex 
                        paddingX="16" 
                        vertical="center"
                        style={{
                            background: 'var(--brand-solid-strong)',
                            backgroundColor: 'var(--color-beta-bg)',
                            height: '48px',
                            borderTopLeftRadius: '24px',
                            borderBottomLeftRadius: '24px',
                            border: '1px solid var(--brand-alpha-medium)',
                            borderRight: 'none',
                            boxShadow: 'var(--shadow-elevation-dark-two)',
                            position: 'relative',
                            zIndex: 1,
                            marginRight: '-24px',
                            paddingRight: '32px'
                        }}
                    >
                        <Text variant="code-default-xs" weight="strong" style={{ color: 'white' }}>
                            BETA
                        </Text>
                    </Flex>

                    {/* Main Nav Capsule */}
                    <Flex 
                        vertical="center"
                        paddingX="12"
                        radius="full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(16px)',
                            height: '48px',
                            width: 'fit-content',
                            minWidth: '420px',
                            border: '1px solid var(--neutral-alpha-weak)',
                            boxShadow: 'var(--shadow-elevation-dark-two)',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        <Row vertical="center" fillWidth horizontal="between">
                            <Row vertical="center" gap="12">
                                {/* Dynamic Home Icon with Smooth Animation */}
                                <Link 
                                    href="/" 
                                    style={{ textDecoration: 'none' }}
                                    onMouseEnter={() => setIsHomeHovered(true)}
                                    onMouseLeave={() => setIsHomeHovered(false)}
                                >
                                    <motion.div
                                        layout
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 300, 
                                            damping: 25,
                                            layout: { duration: 0.3 }
                                        }}
                                        style={{
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--brand-alpha-weak)',
                                            border: '1px solid var(--brand-alpha-medium)',
                                            borderRadius: '9999px',
                                            padding: '0 8px',
                                            overflow: 'hidden',
                                            minWidth: '32px'
                                        }}
                                    >
                                        <Code size={16} className="text-brand-strong" style={{ flexShrink: 0 }} />
                                        <AnimatePresence>
                                            {isHomeHovered && (
                                                <motion.span
                                                    initial={{ opacity: 0, width: 0, x: -5 }}
                                                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                                                    exit={{ opacity: 0, width: 0, x: -5 }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{
                                                        marginLeft: '8px',
                                                        fontSize: '10px',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        whiteSpace: 'nowrap',
                                                        color: 'var(--brand-on-background-strong)'
                                                    }}
                                                >
                                                    {language === 'tr' ? 'Anasayfa' : 'Home'}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </Link>

                                {/* Desktop Mega Menu */}
                                <Row s={{ hide: true }}>
                                    <MegaMenu menuGroups={menuGroups} />
                                </Row>

                                {/* Mobile Menu Toggle */}
                                <Row hide s={{ display: 'flex' }}>
                                    <NavIcon 
                                        isActive={isMobileMenuOpen} 
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                                    />
                                </Row>
                            </Row>

                            <Row vertical="center" gap="8">
                                <Flex background="neutral-alpha-weak" radius="full" padding="2" vertical="center">
                                    <ToggleButton
                                        id="lang-en"
                                        size="s"
                                        selected={language === 'en'}
                                        onClick={() => setLanguage('en')}
                                    >
                                        EN
                                    </ToggleButton>
                                    <ToggleButton
                                        id="lang-tr"
                                        size="s"
                                        selected={language === 'tr'}
                                        onClick={() => setLanguage('tr')}
                                    >
                                        TR
                                    </ToggleButton>
                                    <Line vert background="neutral-alpha-medium" height="12" marginX="4" />
                                    <IconButton
                                        id="theme-toggle"
                                        size="s"
                                        variant="tertiary"
                                        icon={theme === 'dark' ? 'sun' : 'moon'}
                                        onClick={toggleTheme}
                                    />
                                </Flex>

                                <Row s={{ hide: true }}>
                                    <Button 
                                        variant="tertiary" 
                                        size="s" 
                                        onClick={() => setIsContactOpen(true)}
                                        prefixIcon="mail"
                                    >
                                        <span>{t("nav.contact")}</span>
                                    </Button>
                                </Row>
                            </Row>
                        </Row>
                    </Flex>
                </Row>

                {/* Mobile Mega Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <MobileMegaMenu 
                            menuGroups={[
                                { id: "home", label: t("nav.home"), href: "/" },
                                ...menuGroups
                            ]} 
                            onClose={() => setIsMobileMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>

                <Dialog
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                    title="Get in Touch"
                    description="Drop me a message and let's start a conversation."
                    maxWidth="s"
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
                        />
                        <Button variant="primary" fillWidth onClick={() => setIsContactOpen(false)}>
                            Send Message
                        </Button>
                    </Flex>
                </Dialog>
            </Flex>
        </>
    );
};