import { Award, Code, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    icon: Award,
    title: 'Academic Excellence',
    desc: 'Maintaining high GPA in the Software Engineering program at Debre Markos University.',
    period: '2021 – Present',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/10',
  },
  {
    icon: Code,
    title: 'Full Stack Projects',
    desc: 'Delivered multiple end-to-end applications using modern web technologies and best practices.',
    period: '2023 – 2024',
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/10',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Successfully led and contributed to group projects and collaborative software development efforts.',
    period: '2022 – Present',
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/10',
  },
  {
    icon: TrendingUp,
    title: 'Ethiopian AI Institute Startup',
    desc: 'Built full-stack features for Besew Online (job platform) and Besew Casting (talent platform) at the Ethiopian Artificial Intelligence Institute — two live production products serving real users.',
    period: '2025',
    accent: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    desc: 'Actively learning new technologies and staying current with evolving industry standards.',
    period: 'Ongoing',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/10',
  },
];

const stats = [
  { value: '6+', label: 'Projects Shipped' },
  { value: '12+', label: 'Technologies' },
  { value: '4th', label: 'Year of Study' },
  { value: '10+', label: 'GitHub Repos' },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-4 sm:py-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">04 — Journey</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Milestone cards */}
        <div className="grid sm:grid-cols-2 gap-3">
          {milestones.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex gap-4 p-5 rounded-xl border ${item.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group`}
              >
                <div className={`p-2.5 rounded-lg ${item.bg} shrink-0 h-fit mt-0.5`}>
                  <Icon size={18} className={item.accent} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">{item.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
