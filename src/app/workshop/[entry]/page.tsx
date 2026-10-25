import type { Metadata } from "next";
import { Suspense } from "react";
import { workshopOpenGraph } from "@/lib/metadata";
import { entries, findEntry } from "../entries";
import WorkshopView from "../_components/WorkshopView/WorkshopView";

export function generateStaticParams() {
  return entries.map((entry) => ({ entry: entry.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/workshop/[entry]">): Promise<Metadata> {
  const { entry } = await params;
  const found = findEntry(entry);

  if (!found) {
    return { title: "Workshop" };
  }

  const canonical = `/workshop/${found.id}`;

  return {
    title: `${found.name} · Workshop`,
    alternates: { canonical },
    openGraph: workshopOpenGraph(canonical),
  };
}

export default function WorkshopEntryPage({
  params,
}: PageProps<"/workshop/[entry]">) {
  return (
    <Suspense fallback={null}>
      {params.then(({ entry }) => <WorkshopView entryId={entry} />)}
    </Suspense>
  );
}
