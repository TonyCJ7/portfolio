export type Profile = { name: string; role: string; tagline: string; email: string; github: string; linkedin: string; location: string; cvFile: string; primaryCta: string; cvCta: string; cvLinkText: string; pageTitle: string; metaDescription: string };

export type Experience = { id: string; dates: string; from: string; to: string | null; title: string; company: string; url: string; place: string; body: string; tags: string[] };

export type Highlight = { figure: string; what: string; how: string };

export type SkillGroup = { name: string; items: string[] };

export type Education = { label: string; dates: string; from: string; to: string; degree: string; institution: string; languages: string };

export type NavSection = { id: string; label: string };

export type Colophon = { long: string; short: string; workshopLink: string };

export type NotFoundCopy = { title: string; body: string; cta: string };
