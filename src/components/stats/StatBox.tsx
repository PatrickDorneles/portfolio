"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import { useIsTouch } from "@/src/hooks/use-touch";
import { useRef, useState } from "react";

interface StatBoxProps {
  name: string;
  value: number;
  description?: string;
  details?: string;
}

export function StatBox({ name, value, description, details }: StatBoxProps) {
  const isTouch = useIsTouch();
  const [shouldOpen, setShouldOpen] = useState<boolean | undefined>(undefined);

  const modifier = Math.floor((value - 10) / 2);
  const modifierDisplay = modifier >= 0 ? `+${modifier}` : modifier.toString();

  return (
    <HoverCard open={shouldOpen}>
      <HoverCardTrigger
        asChild
        onClick={() => {
          if (!isTouch) return;

          setShouldOpen(!setShouldOpen);
        }}
      >
        <div className="flex flex-col items-center cursor-help select-none">
          <div className="bg-gray-800/50 w-24 h-24 rounded-lg border-2 border-indigo-500/50 flex flex-col items-center justify-center p-2 relative">
            <span className="text-2xl font-bold text-white font-display">
              {value}
            </span>
            <div className="absolute -bottom-4 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-display text-sm">
              {modifierDisplay}
            </div>
          </div>
          {description && (
            <p className="mt-6 text-sm text-indigo-300 text-center max-w-[150px]">
              {description}
            </p>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-gray-800/95 border-indigo-500/20">
        <div className="space-y-2">
          <h4 className="text-lg font-display text-white">{name}</h4>
          <p className="text-sm text-indigo-200">{details}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
