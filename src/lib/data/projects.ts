export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
}

export const projects: Record<string, Project> = {
  t20ac: {
    title: "Tormenta 20 Calculator",
    description:
      "A platform to help Table Top RPG players to create their characters using the T20 system",
    tech: ["React", "NextJS", "TailwindCSS", "Markdown", "Jotai"],
    image: "https://i.imgur.com/dgCLha1.png",
    fullDescription: `
      Created this calculator for a complex point based skill assessment system for the Tormenta20 RPG system, a the time there were no calculator likewise made for this system, so instead of just making a basic calculator I focused on simplicity and customizability.
      * Near perfectly typed code, made for easy open source contributions even in complex sections
      * Available both in english and in portuguese, internationalization made with next-intl
      * Markdown rendered section at the end explaining both the project and what it was made for
    `,
    challenges:
      "The complex system for updating the points, and the variability of interactions with different 'races' of TormentaRPG was the most challenging concepts",
    solutions:
      "Analized all the available races on the system and created a strongly typed and structured state, then managed to securily update the shared state on all possible inputs",
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
  },
};
