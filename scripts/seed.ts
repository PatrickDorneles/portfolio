import { config } from "dotenv";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { resolve } from "path";

import * as dbSchema from "../src/lib/db/schema";
import { experiences as experienceRecords } from "../src/lib/db/seed/data/experiences";
import { proficiencies as proficiencyRecords } from "../src/lib/db/seed/data/proficiencies";
import { projects as projectRecords } from "../src/lib/db/seed/data/projects";
import { skills as skillRecords } from "../src/lib/db/seed/data/skills";
import { stats as statRecords } from "../src/lib/db/seed/data/stats";

const root = resolve(process.cwd());
config({ path: resolve(root, ".env.local") });
config({ path: resolve(root, ".env") });

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is required (e.g. file:./.data/local.db for local SQLite).");
}

const { experiences, proficiencies, projects, skills, stats } = dbSchema;

const client = createClient({
  url,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const db = drizzle(client, { schema: dbSchema });

async function main() {
  await db.delete(proficiencies);
  await db.delete(stats);
  await db.delete(skills);
  await db.delete(projects);
  await db.delete(experiences);

  let i = 0;
  for (const [id, ex] of Object.entries(experienceRecords)) {
    await db.insert(experiences).values({
      id,
      title: ex.title,
      company: ex.company,
      period: ex.period,
      description: ex.description,
      responsibilities: ex.responsibilities,
      achievements: ex.achievements,
      technologies: ex.technologies,
      sortOrder: i++,
    });
  }

  i = 0;
  for (const [id, p] of Object.entries(projectRecords)) {
    await db.insert(projects).values({
      id,
      title: p.title,
      description: p.description,
      fullDescription: p.fullDescription,
      challenges: p.challenges,
      solutions: p.solutions,
      image: p.image,
      link: p.link,
      tech: p.tech,
      sortOrder: i++,
    });
  }

  for (const [id, s] of Object.entries(skillRecords)) {
    await db.insert(skills).values({
      id,
      name: s.name,
      level: s.level,
      description: s.description,
      experience: s.experience,
    });
  }

  for (let order = 0; order < statRecords.length; order++) {
    const s = statRecords[order]!;
    await db.insert(stats).values({
      name: s.name,
      value: s.value,
      description: s.description,
      details: s.details,
      sortOrder: order,
    });
  }

  for (let order = 0; order < proficiencyRecords.length; order++) {
    const p = proficiencyRecords[order]!;
    await db.insert(proficiencies).values({
      title: p.title,
      icon: p.icon,
      skills: p.skills,
      sortOrder: order,
    });
  }

  console.log("Seed completed.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
