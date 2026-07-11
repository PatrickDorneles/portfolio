import type { Project } from "@/src/lib/types/content";

export const projects: Record<string, Project> = {
  t20ac: {
    title: "Tormenta 20 Calculator",
    description:
      "A specialized web application for the Brazilian TTRPG Tormenta 20 - Edição Jogo do Ano, assisting players in character creation by streamlining attribute calculation and the point-buy system.",
    tech: ["React", "NextJS", "TailwindCSS", "Markdown", "Jotai", "next-intl", "Zod", "html-to-image"],
    image: "https://i.imgur.com/dgCLha1.png",
    fullDescription: `
      Created a comprehensive calculator for the complex point-based skill system of the Tormenta20 RPG system. The project focuses on simplicity, customizability, and high technical quality.
      * Dynamic Attribute Calculator: Real-time calculation following official T20 rules.
      * Smart Point-Buy System: Effortless point distribution with instant cost calculation and validation.
      * Racial Bonus Integration: Automatic application of racial bonuses, including "Choice" and "Mixed" types.
      * Character Management: Local creation, saving, and switching between multiple characters.
      * Export/Import: Supports JSON data and high-quality PNG image export of the attribute sheet.
      * QR Code Export: Optional QR codes in exported images for direct character configuration import via URL.
      * Internationalization: Full support for English and Portuguese via next-intl.
      * Technical Excellence: Near perfectly typed code, designed for easy open-source contributions.
    `,
    challenges:
      "Managing the complex point update system and the high variability of racial interactions within the T20 rules.",
    solutions:
      "Analyzed all available races in the system to create a strongly typed and structured state, ensuring secure and accurate updates across all possible inputs.",
    link: "https://t20ac.vercel.app/en",
  },
  bin2dec: {
    title: "Binary 2 Decimal",
    description: "A simple web app that converts binary numbers to decimal",
    tech: ["React"],
    image: "https://i.imgur.com/UwUB4N3.png",
    fullDescription: `
      Simple convertion app for binary to decimal, built focused on simplicity.
      * Only 2 Inputs
      * Small app built in React with CSS Modules
    `,
    challenges:
      "There are not that much challenges here, the most difficult part was learning how to make the conversion",
    solutions:
      "The simple task made me study more deeply the Math object from javascript and how numbers and conversions work in the language",
    link: "https://bin2dec-kohl.vercel.app",
  },
};
