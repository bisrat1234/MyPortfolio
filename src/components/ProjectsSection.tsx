import { Github, ExternalLink, Clock, Briefcase } from 'lucide-react';
import { useState } from 'react';

const featuredProjects = [
  {
    title: 'Besew Online Platform',
    description: 'Full-stack job matching platform connecting job seekers, employers, and startups with professionals. Features contribution requests, agency listings, and recruitment tools — built for the Ethiopian market.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/Besewplatforms/bswpublic',
    live: 'https://besewonline.com',
    year: '2025',
    badge: 'EAII Startup',
  },
  {
    title: 'Besew Casting Platform',
    description: 'Full-stack talent casting platform for connecting actors, models, and creatives with film productions and ad campaigns. Includes talent profiles, casting calls, and production management.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/brookgit/castingfront',
    live: 'https://cast.besewonline.com',
    year: '2025',
    badge: 'EAII Startup',
  },
  {
    title: 'Besew Backend Service',
    description: 'Shared RESTful backend API powering both Besew Online and Besew Casting. Handles authentication, user management, job matching logic, and real-time notifications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/brookgit/backendsvc',
    live: null,
    year: '2025',
    badge: 'EAII Startup',
  },
  {
    title: 'Court Case Management System',
    description: 'Full-stack digital solution for managing court cases, tracking legal proceedings, and maintaining case records to improve judicial administration efficiency.',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'CSS'],
    github: 'https://github.com/bisrat1234/CourtCaseManagementSystem',
    live: 'https://bisrat1234.github.io/CourtCaseManagementSystem/',
    year: '2024',
    badge: null,
  },
  {
    title: 'Clearance Management System',
    description: 'Full-stack system for managing student clearance processes in educational institutions, streamlining administrative workflows end-to-end.',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'HTML/CSS'],
    github: 'https://github.com/bisrat1234/ClearanceManagementSystem',
    live: 'https://bisrat1234.github.io/ClearanceManagementSystem/',
    year: '2024',
    badge: null,
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS with EmailJS integration for direct contact — the site you are viewing right now.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
    github: 'https://github.com/bisrat1234/MyPortfolio',
    live: 'https://bisrat1234.github.io/MyPortfolio/',
    year: '2025',
    badge: null,
  },
];

const futureProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online shopping platform with payment integration, inventory management, and user authentication.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'Planning',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team features, and advanced task tracking.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
    status: 'In Progress',
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform for course delivery and student tracking with interactive content and assessments.',
    tags: ['React', 'Spring Boot', 'MySQL', 'AWS'],
    status: 'Planning',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts with scheduling and engagement tracking.',
    tags: ['React', 'Python', 'FastAPI', 'Redis'],
    status: 'Planning',
  },
];

export const ProjectsSection = () => {
  const [tab, setTab] = useState<'featured' | 'future'>('featured');

  return (
    <section id="projects" className="py-4 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">03 — Projects</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 mb-3 p-1 rounded-lg bg-white/[0.03] border border-white/5 w-fit">
          {(['featured', 'future'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                tab === t
                  ? 'bg-primary text-black shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t === 'featured' ? `Shipped (${featuredProjects.length})` : 'Upcoming'}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {tab === 'featured' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    {project.badge && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        <Briefcase size={9} />
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                        aria-label="Live site"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Future projects */}
        {tab === 'future' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {futureProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                    project.status === 'In Progress'
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-white/5 text-muted-foreground border border-white/5'
                  }`}>
                    <Clock size={10} />
                    {project.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/bisrat1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-sm font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200"
          >
            <Github size={16} />
            View All on GitHub
            <ExternalLink size={12} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
