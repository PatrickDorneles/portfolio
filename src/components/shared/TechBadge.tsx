interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">
      {tech}
    </span>
  );
}