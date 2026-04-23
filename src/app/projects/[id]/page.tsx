import { ProjectView } from "@/src/components/projects/ProjectView";
import { getProjectById, getProjectIds } from "@/src/lib/db/queries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = await getProjectIds();
  return ids.map((id) => ({ id }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);
  if (!project) {
    notFound();
  }
  return <ProjectView project={project} />;
}
