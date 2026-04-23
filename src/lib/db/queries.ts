import { asc, eq } from "drizzle-orm";
import type { Experience, Proficiency, Project, ProficiencyIcon, Skill, Stat } from "../types/content";
import { db } from "./index";
import { experiences, proficiencies, projects, skills, stats } from "./schema";

export type ExperienceWithId = { id: string } & Experience;
export type ProjectWithId = { id: string } & Project;

export async function getExperiencesOrdered(): Promise<ExperienceWithId[]> {
  const rows = await db
    .select()
    .from(experiences)
    .orderBy(asc(experiences.sortOrder), asc(experiences.id));
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    company: r.company,
    period: r.period,
    description: r.description,
    responsibilities: r.responsibilities as string[],
    achievements: r.achievements as string[],
    technologies: r.technologies as string[],
  }));
}

export async function getExperienceById(
  id: string,
): Promise<ExperienceWithId | undefined> {
  const [row] = await db
    .select()
    .from(experiences)
    .where(eq(experiences.id, id));
  if (!row) return undefined;
  return {
    id: row.id,
    title: row.title,
    company: row.company,
    period: row.period,
    description: row.description,
    responsibilities: row.responsibilities as string[],
    achievements: row.achievements as string[],
    technologies: row.technologies as string[],
  };
}

export async function getExperienceIds(): Promise<string[]> {
  const rows = await db
    .select({ id: experiences.id })
    .from(experiences)
    .orderBy(asc(experiences.sortOrder), asc(experiences.id));
  return rows.map((r) => r.id);
}

export async function getProjectsOrdered(): Promise<ProjectWithId[]> {
  const rows = await db
    .select()
    .from(projects)
    .orderBy(asc(projects.sortOrder), asc(projects.id));
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    fullDescription: r.fullDescription,
    challenges: r.challenges,
    solutions: r.solutions,
    image: r.image,
    link: r.link ?? undefined,
    tech: r.tech as string[],
  }));
}

export async function getProjectById(
  id: string,
): Promise<ProjectWithId | undefined> {
  const [row] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, id));
  if (!row) return undefined;
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    fullDescription: row.fullDescription,
    challenges: row.challenges,
    solutions: row.solutions,
    image: row.image,
    link: row.link ?? undefined,
    tech: row.tech as string[],
  };
}

export async function getProjectIds(): Promise<string[]> {
  const rows = await db
    .select({ id: projects.id })
    .from(projects)
    .orderBy(asc(projects.sortOrder), asc(projects.id));
  return rows.map((r) => r.id);
}

export async function getSkillsMap(): Promise<Record<string, Skill>> {
  const rows = await db.select().from(skills);
  const map: Record<string, Skill> = {};
  for (const r of rows) {
    map[r.id] = {
      name: r.name,
      level: r.level,
      description: r.description,
      experience: r.experience as string[],
    };
  }
  return map;
}

export async function getStatsOrdered(): Promise<Stat[]> {
  const rows = await db
    .select()
    .from(stats)
    .orderBy(asc(stats.sortOrder), asc(stats.id));
  return rows.map((r) => ({
    name: r.name,
    value: r.value,
    description: r.description,
    details: r.details,
  }));
}

export async function getProficienciesOrdered(): Promise<Proficiency[]> {
  const rows = await db
    .select()
    .from(proficiencies)
    .orderBy(asc(proficiencies.sortOrder), asc(proficiencies.id));
  return rows.map((r) => ({
    title: r.title,
    icon: r.icon as ProficiencyIcon,
    skills: r.skills as string[],
  }));
}
