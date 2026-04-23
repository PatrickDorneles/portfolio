import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const experiences = sqliteTable("experiences", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  responsibilities: text("responsibilities", { mode: "json" })
    .$type<string[]>()
    .notNull(),
  achievements: text("achievements", { mode: "json" })
    .$type<string[]>()
    .notNull(),
  technologies: text("technologies", { mode: "json" })
    .$type<string[]>()
    .notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  challenges: text("challenges").notNull(),
  solutions: text("solutions").notNull(),
  image: text("image").notNull(),
  link: text("link"),
  tech: text("tech", { mode: "json" }).$type<string[]>().notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const skills = sqliteTable("skills", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  level: integer("level").notNull(),
  description: text("description").notNull(),
  experience: text("experience", { mode: "json" })
    .$type<string[]>()
    .notNull(),
});

export const stats = sqliteTable("stats", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  details: text("details").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const proficiencies = sqliteTable("proficiencies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  icon: text("icon").notNull(),
  skills: text("skills", { mode: "json" }).$type<string[]>().notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});
