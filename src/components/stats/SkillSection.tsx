import { stats } from "@/src/lib/data/stats";
import { proficiencies } from "@/src/lib/data/proficiencies";
import { StatBox } from "./StatBox";
import { ProficiencyBox } from "./ProficiencyBox";

export function SkillSection() {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 font-display">Character Stats</h2>
        <p className="text-indigo-300">Technical Abilities & Proficiencies</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {stats.map((stat) => (
          <StatBox
            key={stat.name}
            name={stat.name}
            value={stat.value}
            description={stat.description}
            details={stat.details}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {proficiencies.map((prof) => (
          <ProficiencyBox
            key={prof.title}
            title={prof.title}
            icon={prof.icon}
            skills={prof.skills}
          />
        ))}
      </div>
    </div>
  );
}
