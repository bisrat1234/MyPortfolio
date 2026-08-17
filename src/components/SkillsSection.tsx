const skillGroups = [
  {
    category: 'Frontend',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    skills: [
      { name: 'React', level: 75 },
      { name: 'TypeScript', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML / CSS', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: 'text-green-400',
    dot: 'bg-green-400',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 65 },
      { name: 'Java', level: 70 },
      { name: 'Spring Boot', level: 60 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    category: 'Database & Tools',
    color: 'text-orange-400',
    dot: 'bg-orange-400',
    skills: [
      { name: 'MySQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Git', level: 70 },
      { name: 'REST API', level: 72 },
      { name: 'Vite', level: 70 },
    ],
  },
];

const learning = ['React Native', 'Flutter', 'Docker', 'AWS'];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-4 sm:py-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">02 — Skills</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className={`text-sm font-semibold ${group.color}`}>{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-3 rounded-xl border border-primary/10 bg-primary/[0.03] p-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest shrink-0">Currently learning →</span>
            {learning.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full border border-primary/20 text-primary bg-primary/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
