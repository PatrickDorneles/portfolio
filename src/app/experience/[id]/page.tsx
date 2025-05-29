import { ExperienceView } from "@/src/components/experience/ExperienceView";
import { experiences } from "@/src/lib/data/experiences";

export function generateStaticParams() {
  return Object.keys(experiences).map((id) => ({
    id,
  }));
}

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = experiences[params.id];

  if (!experience) {
    return null;
  }

  return <ExperienceView id={params.id} />;
}
