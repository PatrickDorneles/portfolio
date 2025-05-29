import { ProjectView } from "@/src/components/projects/ProjectView";
import { projects } from "@/src/lib/data/projects";

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) {
    return null;
  }

  return <ProjectView id={params.id} />;
}
