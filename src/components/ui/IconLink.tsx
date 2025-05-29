interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
}

export function IconLink({ href, icon }: IconLinkProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
