interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  stats: { name: string; value: number }[];
}

export function StatCard({ icon, title, stats }: StatCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-indigo-500/20">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold text-white ml-3 font-display">{title}</h3>
      </div>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-indigo-300">{stat.name}</span>
              <span className="text-white">{stat.value}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}