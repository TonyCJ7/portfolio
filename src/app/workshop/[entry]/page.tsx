import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
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

async function EntryGate({
  params,
}: Pick<PageProps<"/workshop/[entry]">, "params">) {
  const { entry } = await params;

  if (!findEntry(entry)) {
    notFound();
  }

  return <WorkshopView entryId={entry} />;
}

export default function WorkshopEntryPage({
  params,
}: PageProps<"/workshop/[entry]">) {
  return (
    <Suspense fallback={null}>
      <EntryGate params={params} />
    </Suspense>
  );
}
