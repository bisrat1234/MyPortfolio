import { Github, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="text-xl sm:text-2xl font-bold font-mono">
              <span className="text-primary">&lt;</span>
              DY
              <span className="text-primary">/&gt;</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:damitachewyiradu@gmail.com"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/bisrat1234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 text-center">
              © {currentYear} Damitachew Yiradu. Built with{' '}
              <Heart className="text-red-500 inline" size={14} /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
