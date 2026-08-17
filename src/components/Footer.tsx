import { Github, Mail, MessageCircle, Youtube } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { icon: Mail, href: 'mailto:damitachewyirdu@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/bisrat1234', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/damitachew-yiradu-065b83410/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/hiwot423', label: 'Telegram' },
  { icon: Youtube, href: 'https://www.youtube.com/@lijinettube2017', label: 'YouTube' },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-black font-black text-xs font-mono group-hover:scale-110 transition-transform">
              DY
            </div>
            <span className="font-mono text-sm font-bold text-foreground/60 group-hover:text-foreground transition-colors">
              damitachew.dev
            </span>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/5 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Damitachew Yiradu. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
