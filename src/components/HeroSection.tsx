import { Github, Mail, ExternalLink, Code2, GraduationCap, Rocket, MapPin, ArrowDown } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Software Engineering at Debre Markos University.',
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'React & TypeScript frontend, Java & Node.js backend.',
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Rocket,
    title: 'Goals',
    desc: 'Building impactful software at the cutting edge.',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,hsl(var(--primary)/0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT — intro */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-xs font-medium text-violet-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 leading-[1.05]">
              <span className="text-foreground">Damitachew</span>
              <br />
              <span className="text-gradient">Yiradu</span>
            </h1>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-primary" />
              <p className="text-primary font-mono text-xs font-medium uppercase tracking-widest">
                Full Stack Developer
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-5 max-w-md leading-relaxed">
              4th Year Software Engineering student at Debre Markos University.
              I build fast, modern web applications with clean architecture and great UX.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
              >
                <Mail size={14} />
                Get in Touch
              </a>
              <a
                href="https://github.com/bisrat1234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-sm font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                <Github size={14} />
                GitHub
                <ExternalLink size={11} className="text-muted-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/damitachew-yiradu-065b83410/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#0077b5]/30 bg-[#0077b5]/5 text-[#0077b5] text-sm font-medium rounded-lg hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 transition-all duration-200"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                View Projects →
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-5 border-t border-white/5">
              {[
                { value: '6+', label: 'Projects' },
                { value: '12+', label: 'Technologies' },
                { value: '4th', label: 'Year Student' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — about */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Identity row */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-black/20 ring-4 ring-background">
                  <img src="./portfolio_image.jpg" alt="Damitachew Yiradu" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-full h-full rounded-xl border border-primary/30 -z-10" />
              </div>
              <div>
                <p className="font-semibold text-sm">Damitachew Yiradu</p>
                <p className="text-primary font-mono text-xs">Junior Full Stack Developer</p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
                  <MapPin size={11} />
                  <span>Debre Markos, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
                <span className="ml-1.5 text-xs text-muted-foreground font-mono">profile.json</span>
              </div>
              <pre className="p-3 font-mono text-[10px] leading-relaxed">
                <code>
                  <span className="text-white/30">{'{'}</span>{'\n'}
                  {'  '}<span className="text-blue-400">"role"</span><span className="text-white/30">: </span><span className="text-green-400">"Full Stack Dev"</span><span className="text-white/30">,</span>{'\n'}
                  {'  '}<span className="text-blue-400">"year"</span><span className="text-white/30">: </span><span className="text-primary">"4th Year"</span><span className="text-white/30">,</span>{'\n'}
                  {'  '}<span className="text-blue-400">"status"</span><span className="text-white/30">: </span><span className="text-green-400">"Open to Work"</span>{'\n'}
                  <span className="text-white/30">{'}'}</span>
                </code>
              </pre>
            </div>

            {/* Bio */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Passionate software engineering student with hands-on experience building real-world apps.
              I care about clean code, performance, and building things that matter.
            </p>

            {/* Info cards */}
            <div className="space-y-2">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex gap-3 p-2.5 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-200 group"
                  >
                    <div className={`p-1.5 rounded-md ${card.bg} shrink-0`}>
                      <Icon size={12} className={card.accent} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs group-hover:text-primary transition-colors">{card.title}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden sm:flex"
      >
        <span className="text-[10px] font-mono">scroll</span>
        <ArrowDown size={13} />
      </a>
    </section>
  );
};
