"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.push('/')}
      className="flex items-center text-indigo-400 hover:text-indigo-300 mb-8"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Home
    </button>
  );
}