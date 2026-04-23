CREATE TABLE `experiences` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`company` text NOT NULL,
	`period` text NOT NULL,
	`description` text NOT NULL,
	`responsibilities` text NOT NULL,
	`achievements` text NOT NULL,
	`technologies` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `proficiencies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`icon` text NOT NULL,
	`skills` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`full_description` text NOT NULL,
	`challenges` text NOT NULL,
	`solutions` text NOT NULL,
	`image` text NOT NULL,
	`link` text,
	`tech` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`level` integer NOT NULL,
	`description` text NOT NULL,
	`experience` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stats` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`value` integer NOT NULL,
	`description` text NOT NULL,
	`details` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
