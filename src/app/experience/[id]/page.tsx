import { ExperienceView } from "@/src/components/experience/ExperienceView";
import { getExperienceById, getExperienceIds } from "@/src/lib/db/queries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = await getExperienceIds();
  return ids.map((id) => ({ id }));
}

export default async function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = await getExperienceById(params.id);
  if (!experience) {
    notFound();
  }
  return <ExperienceView experience={experience} />;
}
