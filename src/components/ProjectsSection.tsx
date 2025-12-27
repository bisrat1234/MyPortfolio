import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Clearance Management System',
    description: 'A comprehensive system for managing student clearance processes in educational institutions. Built with modern web technologies to streamline administrative workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/bisrat1234/ClearanceManagementSystem',
    live: '',
    featured: true,
  },
  {
    title: 'Court Case Management System',
    description: 'A digital solution for managing court cases, tracking legal proceedings, and maintaining case records. Designed to improve efficiency in judicial administration.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/bisrat1234/CourtCaseManagementSystem',
    live: '',
    featured: true,
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS for optimal performance.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/bisrat1234/portfolio',
    live: '',
    featured: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              My completed projects and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-gradient rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={36} />
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/bisrat1234" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
