"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { IconLink } from "../ui/IconLink";
import { profile, social } from "@/src/lib/config/profile";

export function Hero() {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLevel((prev) => (prev < 99 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-indigo-500/10 blur-3xl" />
      <div className="relative text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg shadow-indigo-500/50"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 px-3 py-1 rounded-full text-sm font-display">
              Lvl {level}
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 font-display">
          {profile.name}
        </h1>
        <p className="text-indigo-300 text-xl mb-8">{profile.title}</p>
        <div className="flex justify-center gap-4 mb-12">
          <IconLink href={social.github} icon={<Github />} />
          <IconLink href={social.linkedin} icon={<Linkedin />} />
          <IconLink href={`mailto:${social.email}`} icon={<Mail />} />
        </div>
      </div>
    </div>
  );
}
