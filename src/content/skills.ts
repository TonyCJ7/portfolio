import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "styled-components", "Emotion", "Material UI", "REST APIs"],
  },
  {
    name: "State",
    items: ["React Redux", "Redux-Saga", "MobX"],
  },
  {
    name: "Build & performance",
    items: ["Webpack", "Rollup.js"],
  },
  {
    name: "Testing",
    items: ["Jest", "Testing Library"],
  },
  {
    name: "Workflow",
    items: ["Cursor IDE", "Prompt engineering", "Git", "GitHub", "GitHub Actions", "Jira", "Agile"],
  },
];
