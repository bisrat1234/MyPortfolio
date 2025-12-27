import { Github, Mail, Heart, MessageCircle, Youtube } from 'lucide-react';

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
              <a
                href="https://t.me/hiwot423"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-[#0088cc] hover:text-[#0088cc] hover:bg-[#0088cc]/10 transition-all"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.youtube.com/@lijinettube2017"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-[#ff0000] hover:text-[#ff0000] hover:bg-[#ff0000]/10 transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 text-center">
              © {currentYear} Damitachew Yiradu. All rights reserved. 
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
