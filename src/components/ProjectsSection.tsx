import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with React frontend and Java Spring Boot backend. Features include user authentication, product management, and payment integration.',
    tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/bisrat1234',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/bisrat1234',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and a clean design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/bisrat1234',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
    tags: ['JavaScript', 'API Integration', 'CSS'],
    github: 'https://github.com/bisrat1234',
  },
  {
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support, commenting system, and user authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/bisrat1234',
  },
  {
    title: 'Student Management System',
    description: 'An academic management system for tracking student records, grades, and attendance.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/bisrat1234',
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
              A collection of projects I've worked on and future plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-gradient rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up flex flex-col ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
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
