export type Profile = { name: string; role: string; tagline: string; email: string; github: string; linkedin: string; location: string; cvFile: string; primaryCta: string; cvCta: string; cvLinkText: string; pageTitle: string; metaDescription: string };

export type Experience = { id: string; from: string; to: string | null; partTime?: boolean; title: string; company: string; url: `http${"" | "s"}://${string}`; place: string; body: string; tags: string[] };

export type Project = { id: string; owner: string; title: string; url: Experience["url"]; github?: boolean; body: string; tags: string[] };

export type Highlight = { figure: string; what: string; how: string };

export type SkillGroup = { name: string; items: string[] };

export type NavSection = { id: string; label: string };

export type Colophon = { long: string; short: string; workshopLink: string };

export type NotFoundCopy = { title: string; body: string; cta: string };

export type ContactCopy = { intro: string };
