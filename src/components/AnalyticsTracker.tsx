"use client";

import { useEffect } from "react";
import * as analytics from "@/lib/analytics";

interface AnalyticsTrackerProps {
  type: "blog" | "project";
  slug: string;
  title: string;
  readTimeMinutes?: number;
}

export default function AnalyticsTracker({
  type,
  slug,
  title,
  readTimeMinutes,
}: AnalyticsTrackerProps) {
  useEffect(() => {
    if (type === "blog") {
      analytics.trackBlogPostView(slug, title, readTimeMinutes);
    } else if (type === "project") {
      analytics.trackProjectView(slug, title);
    }
  }, [type, slug, title, readTimeMinutes]);

  return null;
}
