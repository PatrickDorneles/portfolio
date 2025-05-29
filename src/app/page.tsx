import { Trophy, Scroll } from "lucide-react";
import { Hero } from "@/src/components/hero/Hero";
import { SkillSection } from "@/src/components/stats/SkillSection";
import { ProjectCard } from "@/src/components/projects/ProjectCard";
import { ExperienceCard } from "@/src/components/experience/ExperienceCard";
import { AnimatedBackground } from "@/src/components/background/AnimatedBackground";
import { experiences } from "../lib/data/experiences";
import { projects } from "../lib/data/projects";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen bg-gradient-to-b from-gray-900/90 via-indigo-950/90 to-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Hero />
          <SkillSection />
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-display flex items-center">
              <Trophy className="w-8 h-8 mr-3 text-indigo-400" />
              Quest Log (Projects)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(projects).map(([id, project]) => (
                <ProjectCard
                  key={id}
                  id={id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 font-display flex items-center">
              <Scroll className="w-8 h-8 mr-3 text-indigo-400" />
              Adventure Log (Experience)
            </h2>
            <div className="space-y-8">
              {Object.entries(experiences).map(([id, experience]) => (
                <ExperienceCard
                  key={id}
                  id={id}
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  description={experience.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
