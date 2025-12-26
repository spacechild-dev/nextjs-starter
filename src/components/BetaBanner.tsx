"use client";

import { Flex, Text } from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export const BetaBanner = () => {
    const { t } = useLanguage();

    return (
        <Flex
            fillWidth
            paddingY="8"
            paddingX="24"
            horizontal="center"
            background="brand-strong"
            style={{
                zIndex: 1000,
                position: 'relative'
            }}
        >
            <Text variant="label-strong-xs" onBackground="brand-strong">
                {t("home.beta")}
            </Text>
        </Flex>
    );
};
