import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ExternalLink, Folder, Clock } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Clearance Management System',
    description: 'A comprehensive system for managing student clearance processes in educational institutions. Built with modern web technologies to streamline administrative workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/bisrat1234/ClearanceManagementSystem',
    live: 'https://bisrat1234.github.io/ClearanceManagementSystem/',
  },
  {
    title: 'Court Case Management System',
    description: 'A digital solution for managing court cases, tracking legal proceedings, and maintaining case records. Designed to improve efficiency in judicial administration.',
    tags: ['TypeScript', 'JavaScript', 'MongoDB', 'Html', 'CSS', 'React'],
    github: 'https://github.com/bisrat1234/CourtCaseManagementSystem',
    live: 'https://bisrat1234.github.io/CourtCaseManagementSystem/',
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS for optimal performance.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/bisrat1234/portfolio',
    live: 'https://bisrat1234.github.io/MyPortfolio/',
  },
];

const futureProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online shopping platform with payment integration, inventory management, and user authentication. Features modern UI/UX and secure payment processing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'Planning',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking capabilities.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
    status: 'In Progress',
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform for course delivery and student tracking with interactive content, progress monitoring, and assessment tools.',
    tags: ['React', 'Spring Boot', 'MySQL', 'AWS'],
    status: 'Planning',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking features.',
    tags: ['React', 'Python', 'FastAPI', 'Redis'],
    status: 'Planning',
  },
];

const ProjectCard = ({ project, isFuture = false, index }: { project: any; isFuture?: boolean; index: number }) => (
  <div
    className="card-gradient rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up flex flex-col"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-center justify-between mb-4">
      {isFuture ? <Clock className="text-primary" size={36} /> : <Folder className="text-primary" size={36} />}
      {!isFuture && (
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
      )}
      {isFuture && (
        <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
          {project.status}
        </span>
      )}
    </div>

    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 flex-grow">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag: string) => (
        <span
          key={tag}
          className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Completed projects and upcoming developments
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="featured">Featured Projects</TabsTrigger>
              <TabsTrigger value="future">Future Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="future">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {futureProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} isFuture={true} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

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
