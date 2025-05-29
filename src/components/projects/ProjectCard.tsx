"use client";

import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export function ProjectCard({ id, title, description, tech, image }: ProjectCardProps) {
  const router = useRouter();

  return (
    <div 
      className="bg-gray-800/50 rounded-lg border border-indigo-500/20 overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => router.push(`/projects/${id}`)}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" draggable={false} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-display">{title}</h3>
        <p className="text-indigo-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}