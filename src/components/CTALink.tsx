"use client";

import { Button } from "@once-ui-system/core";
import * as analytics from "@/lib/analytics";

interface CTALinkProps {
  href: string;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "s" | "m" | "l";
  weight?: "default" | "strong";
  children: React.ReactNode;
  projectTitle?: string;
}

export default function CTALink({ href, variant, size, weight, children, projectTitle }: CTALinkProps) {
  const handleClick = () => {
    if (projectTitle) {
      analytics.trackProjectCTAClick(projectTitle, children?.toString() || "", href);
    } else {
      analytics.trackOutboundClick(href);
    }
  };

  return (
    <Button href={href} variant={variant} size={size} weight={weight} onClick={handleClick}>
      {children}
    </Button>
  );
}
