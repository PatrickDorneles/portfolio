"use client";

import { BackButton } from "@/src/components/shared/BackButton";
import { TechBadge } from "@/src/components/shared/TechBadge";
import { experiences } from "@/src/lib/data/experiences";

export function ExperienceView({ id }: { id: string }) {
  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900/90 via-indigo-950/90 to-gray-900/90">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <BackButton />

        <div className="bg-gray-800/50 p-8 rounded-lg border border-indigo-500/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-display">
              {experience.title}
            </h1>
            <p className="text-2xl text-indigo-400">{experience.company}</p>
            <p className="text-indigo-300">{experience.period}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-display">
                Overview
              </h2>
              <p className="text-indigo-200">{experience.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-display">
                Key Responsibilities
              </h2>
              <ul className="list-disc list-inside text-indigo-200 space-y-2">
                {experience.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-display">
                Key Achievements
              </h2>
              <ul className="list-disc list-inside text-indigo-200 space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-display">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
