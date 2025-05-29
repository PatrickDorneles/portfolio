"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/src/components/ui/hover-card";
import { skills } from "@/src/lib/data/skills";
import { Progress } from "@/src/components/ui/progress";

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  const skill = skills[name];
  if (!skill) return null;

  const getRankTitle = (level: number) => {
    if (level >= 90) return "Master";
    if (level >= 80) return "Expert";
    if (level >= 60) return "Advanced";
    if (level >= 40) return "Intermediate";
    return "Novice";
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm cursor-help transition-colors hover:bg-indigo-600/30 select-none">
          {name}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-gray-800/95 border-indigo-500/20">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-display text-white">{skill.name}</h4>
              <span className="text-sm text-indigo-400">
                Level {skill.level} | {getRankTitle(skill.level)}
              </span>
            </div>
            <Progress value={skill.level} className="h-2" />
            <p className="text-sm text-indigo-200">{skill.description}</p>
          </div>
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-indigo-300">Experience:</h5>
            <ul className="text-sm text-indigo-200 space-y-1">
              {skill.experience.map((exp, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
