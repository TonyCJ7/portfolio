import { defineEntry, select, toggle } from "@/app/workshop/controls";
import { experience } from "@/content/experience";
import type { Experience } from "@/types/content";
import ExperienceList from "./ExperienceList";

const extreme: Experience = {
  id: "extreme",
  dates: "2020 — 2021",
  from: "2020-01",
  to: "2021-01",
  title: "Internationalization Accessibility Platform Lead",
  company: "Example Company",
  url: "https://example.com",
  place: "Thiruvananthapuram",
  body: "A sample row with the longest title and tag the layout has to hold.",
  tags: [
    "React",
    "VeryLongUnbrokenTechnologyNameForTesting",
    "TypeScript",
    "Design system",
    "Performance",
  ],
};

const ROW_STATES = ["rest", "hover", "focus", "dimmed"] as const;

function findSample(id: string): Experience {
  return experience.find((item) => item.id === id) ?? extreme;
}

function withNeighbors(chosen: Experience): Experience[] {
  const [before, after] = experience.filter((item) => item.id !== chosen.id);

  return [before, chosen, after];
}

function sampleSource(id: string): string {
  if (id === extreme.id) {
    return "extreme";
  }

  return `experience[${experience.findIndex((item) => item.id === id)}]`;
}

export const entry = defineEntry({
  id: "experience-row",
  name: "Experience row",
  stage: 2,
  center: false,
  lede: "One job in the experience list: dates, a linked title, place, a short summary and tools, lifting on hover and focus while its siblings dim.",
  controls: {
    entry: select(
      "Entry",
      experience.map((item) => item.id).concat(extreme.id),
      experience[1].id,
    ),
    state: select("State", ROW_STATES, "rest"),
    siblings: toggle("With siblings", true),
  },
  spec: {
    folder: "src/components/ExperienceRow/",
    props: [
      "ExperienceRow: entry (an Experience from src/content/experience.ts), target (Workshop dimmed state only)",
      "ExperienceList: items, targetId (marks one row as the dimmed state's target)",
      "An entry with an empty url renders its title as plain text",
    ],
    tokens: [
      "Date: mono label, column 1 of a 2fr 6fr grid, one column on phone",
      "Title: text-title arrow link; place: 11 px label; body: text-small Text 2",
      "Hover and focus layer: Surface with shadow-lift, 6 px radius, 24 px past the row (16 px on phone)",
      "48 px between rows",
    ],
    motion: [
      "Layer background and shadow 150 ms standard; sibling rows fade to 50% opacity over 150 ms; under reduced motion the opacity changes at once",
    ],
    a11y: [
      "An ol of li rows; dates in a time element with datetime",
      "The whole row is the title link's hit area through its after pseudo element, so the focus ring stays on the title",
      "External titles open in a new tab",
      "Pressed looks like hover (a press on the row is a hover), so the State control does not offer it",
    ],
  },
  render: (args) => {
    const chosen = findSample(args.entry);
    const items = args.siblings ? withNeighbors(chosen) : [chosen];
    const targetId = args.state === "dimmed" ? chosen.id : undefined;

    return <ExperienceList items={items} targetId={targetId} />;
  },
  usage: (args) => {
    if (args.siblings) {
      return "<ExperienceList items={experience} />";
    }

    return `<ExperienceList items={[${sampleSource(args.entry)}]} />`;
  },
});
