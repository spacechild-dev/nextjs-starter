export const GA_MEASUREMENT_ID = "G-5X2R4PE2RF";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }: { action: string; params: any }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};

// Specialized events
export const trackBlogPostView = (slug: string, title: string, readTimeMinutes?: number) => {
  event({
    action: "blog_post_view",
    params: {
      post_slug: slug,
      post_title: title,
      read_time_minutes: readTimeMinutes,
    },
  });
};

export const trackProjectView = (slug: string, title: string) => {
  event({
    action: "project_view",
    params: {
      project_slug: slug,
      project_title: title,
    },
  });
};

export const trackProjectCTAClick = (projectTitle: string, ctaText: string, url: string) => {
  event({
    action: "project_cta_click",
    params: {
      project_title: projectTitle,
      cta_text: ctaText,
      url: url,
    },
  });
};

export const trackOutboundClick = (url: string) => {
  event({
    action: "outbound_click",
    params: {
      url: url,
    },
  });
};

export const trackLanguageChange = (lang: string) => {
  event({
    action: "language_change",
    params: {
      language: lang,
    },
  });
};

export const trackThemeChange = (theme: string) => {
  event({
    action: "theme_change",
    params: {
      theme: theme,
    },
  });
};

export const trackContactFormSubmission = (data: {
  name: string;
  email: string;
  company?: string;
  position?: string;
}) => {
  event({
    action: "contact_form_submission",
    params: {
      ...data,
    },
  });

  // Push to dataLayer for GA4 / GTM
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "form_submission",
      form_name: "contact_form",
      ...data,
    });
  }
};
