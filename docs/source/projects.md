# Projects

## Tormenta 20 Calculator
**Description**: A specialized web application for the Brazilian TTRPG Tormenta 20 - Edição Jogo do Ano, assisting players in character creation by streamlining attribute calculation and the point-buy system.
**Tech**: React, NextJS, TailwindCSS, Markdown, Jotai, next-intl, Zod, html-to-image
**Full Description**:
Created a comprehensive calculator for the complex point-based skill system of the Tormenta20 RPG system. The project focuses on simplicity, customizability, and high technical quality.
- **Dynamic Attribute Calculator**: Real-time calculation following official T20 rules.
- **Smart Point-Buy System**: Effortless point distribution with instant cost calculation and validation.
- **Racial Bonus Integration**: Automatic application of racial bonuses, including "Choice" and "Mixed" types.
- **Character Management**: Local creation, saving, and switching between multiple characters.
- **Export/Import**: Supports JSON data and high-quality PNG image export of the attribute sheet.
- **QR Code Export**: Optional QR codes in exported images for direct character configuration import via URL.
- **Internationalization**: Full support for English and Portuguese via `next-intl`.
- **Technical Excellence**: Near perfectly typed code, designed for easy open-source contributions.
**Challenges**: Managing the complex point update system and the high variability of racial interactions within the T20 rules.
**Solutions**: Analyzed all available races in the system to create a strongly typed and structured state, ensuring secure and accurate updates across all possible inputs.
**Link**: https://t20ac.vercel.app/en

---

## Monkey's Paw Generator
**Description**: A hauntingly beautiful web application that transforms deepest desires into ironic nightmares using AI.
**Tech**: Next.js, TypeScript, Tailwind CSS, Google Gemini API, Upstash Redis, next-intl
**Full Description**:
Inspired by the classic supernatural trope, the Monkey's Paw Generator grants wishes in the most cruel and ironic way possible. The AI weaves a short, gothic story revealing the terrible price paid for a desire.
- **Core AI Engine**: Integration with Gemini API to generate darkly ironic short stories.
- **Secure API Layer**: Server-side Route Handlers to protect API keys and system prompts.
- **Immersive UI**: Dark, atmospheric design with deep charcoals and crimson accents, featuring specialized typography (Pirata One, Crimson Text).
- ** la Ritual Loading**: Immersive loading sequence with pulsing auras and ominous messages.
- **Share Your Fate**: Ability to save stories to Redis with unique IDs and share them via unique URLs.
- **Ephemeral Content**: Shared stories automatically vanish after 24 hours.
- **Internationalization**: Full support for English and Portuguese using `next-intl`.
- **Rate Limiting**: Distributed rate limiting implemented via Upstash Redis to prevent abuse.
**Challenges**: Implementing a secure and scalable way to share ephemeral content and managing AI prompts to ensure consistent gothic tone.
**Solutions**: Used Upstash Redis for fast, temporary storage of shared wishes and crafted precise system prompts for the Gemini AI.
**Link**: https://monkeyspaw.vercel.app



---

## Binary 2 Decimal
**Description**: A simple web app that converts binary numbers to decimal
**Tech**: React
**Full Description**:
Simple convertion app for binary to decimal, built focused on simplicity.
- Only 2 Inputs
- Small app built in React with CSS Modules
**Challenges**: There are not that much challenges here, the most difficult part was learning how to make the conversion
**Solutions**: The simple task made me study more deeply the Math object from javascript and how numbers and conversions work in the language
**Link**: https://bin2dec-kohl.vercel.app
