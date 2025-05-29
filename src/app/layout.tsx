import "./globals.css";
import type { Metadata } from "next";
import { Hammersmith_One, Ubuntu } from "next/font/google";
import { profile } from "@/src/lib/config/profile";

const displayFont = Hammersmith_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: profile.name,
  description: `Portfolio of ${profile.name} - ${profile.title}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body`}>{children}</body>
    </html>
  );
}
