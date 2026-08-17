import { Code2, GraduationCap, Rocket, MapPin } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Software Engineering at Debre Markos University — building a strong CS foundation.',
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Full-stack with React & TypeScript frontend, Java & Node.js backend.',
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Rocket,
    title: 'Goals',
    desc: 'Building impactful software and staying at the cutting edge of modern dev.',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-4 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">01 — About</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          {/* Left */}
          <div className="flex gap-5 items-start">
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-white/10">
                <img src="./portfolio_image.jpg" alt="Damitachew Yiradu" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border border-primary/20 -z-10" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5">Damitachew Yiradu</h2>
              <p className="text-primary font-mono text-xs mb-2">Junior Full Stack Developer</p>
              <div className="flex items-center gap-1 text-muted-foreground text-xs mb-4">
                <MapPin size={12} />
                <span>Debre Markos, Ethiopia</span>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-1.5 text-xs text-muted-foreground font-mono">profile.json</span>
                </div>
                <pre className="p-3 font-mono text-[10px] sm:text-xs overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-white/40">{'{'}</span>{'\n'}
                    {'  '}<span className="text-blue-400">"role"</span><span className="text-white/40">: </span><span className="text-green-400">"Full Stack Dev"</span><span className="text-white/40">,</span>{'\n'}
                    {'  '}<span className="text-blue-400">"year"</span><span className="text-white/40">: </span><span className="text-primary">"4th Year"</span><span className="text-white/40">,</span>{'\n'}
                    {'  '}<span className="text-blue-400">"status"</span><span className="text-white/40">: </span><span className="text-green-400">"Open to Work"</span>{'\n'}
                    <span className="text-white/40">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
              Passionate software engineering student with hands-on experience building real-world apps.
              I care about clean code, performance, and building things that matter.
            </p>
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-200 group"
                >
                  <div className={`p-2 rounded-lg ${card.bg} shrink-0`}>
                    <Icon size={14} className={card.accent} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs mb-0.5 group-hover:text-primary transition-colors">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
