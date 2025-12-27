import { Button } from '@/components/ui/button';
import { Github, Mail, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-block mb-6 sm:mb-8 px-4 py-2 bg-secondary/50 rounded-full border border-border animate-fade-in">
            <span className="font-mono text-xs sm:text-sm text-muted-foreground">
              <span className="text-primary">~/portfolio</span> $ whoami
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="text-gradient">Damitachew Yiradu</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 animate-slide-up font-mono" style={{ animationDelay: '0.2s' }}>
            <span className="typing-cursor">Full Stack Developer</span>
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
            4th Year Software Engineering Student at Debre Markos University.
            Passionate about building modern web applications with React, Java & JavaScript.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/bisrat1234" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
