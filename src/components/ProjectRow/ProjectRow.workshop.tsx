import { defineEntry, select, toggle } from "@/app/workshop/controls";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";
import ProjectList from "./ProjectList";

const extreme: Project = {
  id: "extreme",
  owner: "Open source contribution",
  title: "An-unusually-long-project-name-without-breaks.example.com",
  url: "https://github.com/TonyCJ7",
  github: true,
  body: "A sample row with the longest owner, an unbroken title and the longest tag the layout has to hold.",
  tags: ["React", "VeryLongUnbrokenTechnologyNameForTesting", "TypeScript", "Design system"],
};

const ROW_STATES = ["rest", "hover", "focus", "dimmed"] as const;

function findSample(id: string): Project {
  return projects.find((item) => item.id === id) ?? extreme;
}

function withNeighbors(chosen: Project): Project[] {
  const [before, after] = projects.filter((item) => item.id !== chosen.id);

  return [before, chosen, after];
}

function sampleSource(id: string): string {
  if (id === extreme.id) {
    return "extreme";
  }

  return `projects[${projects.findIndex((item) => item.id === id)}]`;
}

export const entry = defineEntry({
  id: "project-row",
  name: "Project row",
  stage: 2,
  center: false,
  lede: "One project in the projects list: who it was for, a linked title (GitHub for personal work), a short description and tools, lifting on hover and focus while its siblings dim.",
  controls: {
    project: select(
      "Project",
      projects.map((item) => item.id).concat(extreme.id),
      projects[0].id,
    ),
    state: select("State", ROW_STATES, "rest"),
    siblings: toggle("With siblings", true),
  },
  spec: {
    folder: "src/components/ProjectRow/",
    props: [
      "ProjectRow: project (a Project from src/content/projects.ts), target (Workshop dimmed state only)",
      "ProjectList: items, targetId (marks one row as the dimmed state's target)",
    ],
    tokens: [
      "Owner: mono label in the 156 px first column of grid-cols-label, the same grid as the experience and skill rows; one column on phone",
      "Title: Link kind github (16 px GitHub mark) when github is set, otherwise kind arrow; body: text-small Text 2",
      "Hover and focus layer: RowLift, Surface Lift with shadow-lift, 6 px radius, 24 px past the row (16 px on phone)",
      "48 px between rows",
    ],
    motion: [
      "Layer background and shadow 150 ms standard; sibling rows fade to 50% opacity over 150 ms; under reduced motion the opacity changes at once",
    ],
    a11y: [
      "An ol of li rows; the title is an h3",
      "The whole row is the title link's hit area through its after pseudo element, so the focus ring stays on the title",
      "Every title opens in a new tab; a GitHub title reads \"<title> on GitHub\"",
    ],
  },
  render: (args) => {
    const chosen = findSample(args.project);
    const items = args.siblings ? withNeighbors(chosen) : [chosen];
    const targetId = args.state === "dimmed" ? chosen.id : undefined;

    return <ProjectList items={items} targetId={targetId} />;
  },
  usage: (args) => {
    if (args.siblings) {
      return "<ProjectList items={projects} />";
    }

    return `<ProjectList items={[${sampleSource(args.project)}]} />`;
  },
});
