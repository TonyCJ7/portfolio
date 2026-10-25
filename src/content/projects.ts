import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "portfolio",
    owner: "Personal",
    title: "Portfolio",
    url: "https://github.com/TonyCJ7/portfolio",
    github: true,
    body: "This site: Next.js 16 and React 19, with a Workshop that shows every component under live controls and a WhatDoesThisDo page for every function.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "whatdoesthisdo",
    owner: "Personal",
    title: "WhatDoesThisDo",
    url: "https://github.com/TonyCJ7/WhatDoesThisDo",
    github: true,
    body: "A VS Code and Cursor extension. Hover over one of your own functions or constants and read what it is for, from markdown pages your AI agent keeps up to date.",
    tags: ["VS Code API", "JavaScript", "Markdown"],
  },
  {
    id: "almosafer",
    owner: "Almosafer",
    title: "almosafer.com",
    url: "https://www.almosafer.com/",
    body: "Flight search on the travel site: natural-language AI filters, a Storybook shared by its 5 micro frontends, and a server-rendered UI on a new design system.",
    tags: ["Next.js", "React", "Storybook"],
  },
];
