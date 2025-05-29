"use client";

import { useRouter } from "next/navigation";

interface ExperienceCardProps {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceCard({
  id,
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  const router = useRouter();

  return (
    <div
      className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20 cursor-pointer transition-transform hover:scale-105"
      onClick={() => router.push(`/experience/${id}`)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-white font-display">{title}</h3>
          <p className="text-indigo-400">{company}</p>
        </div>
        <span className="text-indigo-300 text-sm">{period}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
