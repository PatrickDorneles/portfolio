"use client";

import {
  Book,
  Code,
  Database,
  Smartphone,
  Terminal,
  Wrench,
  Gamepad,
} from "lucide-react";
import type { Skill } from "@/src/lib/types/content";
import { SkillBadge } from "./SkillBadge";

const icons = {
  code: Code,
  database: Database,
  terminal: Terminal,
  book: Book,
  smartphone: Smartphone,
  gamepad: Gamepad,
  tools: Wrench,
} as const;

interface ProficiencyBoxProps {
  title: string;
  icon: keyof typeof icons;
  skills: string[];
  skillsByKey: Record<string, Skill>;
}

export function ProficiencyBox({ title, icon, skills, skillsByKey }: ProficiencyBoxProps) {
  const Icon = icons[icon];

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-indigo-500/20">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-indigo-400">
          <Icon />
        </div>
        <h3 className="font-display text-white">{title} Proficiencies</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} skill={skillsByKey[skill]} />
        ))}
      </div>
    </div>
  );
}
