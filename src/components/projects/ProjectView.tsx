"use client";

import { BackButton } from "@/src/components/shared/BackButton";
import { TechBadge } from "@/src/components/shared/TechBadge";
import { projects } from "@/src/lib/data/projects";

export function ProjectView({ id }: { id: string }) {
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900/90 via-indigo-950/90 to-gray-900/90">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <BackButton />

        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold text-white mb-4 font-display">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">
              Overview
            </h2>
            <p className="text-indigo-200 whitespace-pre-line">
              {project.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">
              Challenges
            </h2>
            <p className="text-indigo-200">{project.challenges}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">
              Solutions
            </h2>
            <p className="text-indigo-200">{project.solutions}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
