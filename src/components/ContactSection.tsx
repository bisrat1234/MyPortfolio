import { Mail, Github, MapPin, Send, MessageCircle, Youtube, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'damitachewyirdu@gmail.com',
    href: 'mailto:damitachewyirdu@gmail.com',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/bisrat1234',
    href: 'https://github.com/bisrat1234',
    color: 'text-foreground',
    bg: 'bg-white/5',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'damitachew-yiradu',
    href: 'https://www.linkedin.com/in/damitachew-yiradu-065b83410/',
    color: 'text-[#0077b5]',
    bg: 'bg-[#0077b5]/10',
  },
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@hiwot423',
    href: 'https://t.me/hiwot423',
    color: 'text-[#0088cc]',
    bg: 'bg-[#0088cc]/10',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    value: '@lijinettube2017',
    href: 'https://www.youtube.com/@lijinettube2017',
    color: 'text-[#ff0000]',
    bg: 'bg-[#ff0000]/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Debre Markos, Ethiopia',
    href: null,
    color: 'text-muted-foreground',
    bg: 'bg-white/5',
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Trigger browser autofill by briefly focusing inputs on mount
    // This causes Chrome/Edge/Safari to inject saved profile data
    const timer = setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.focus();
        // Read back what browser autofilled
        setTimeout(() => {
          if (nameRef.current && nameRef.current.value) {
            setFormData(prev => ({ ...prev, name: nameRef.current!.value }));
          }
          if (emailRef.current) {
            emailRef.current.focus();
            setTimeout(() => {
              if (emailRef.current && emailRef.current.value) {
                setFormData(prev => ({ ...prev, email: emailRef.current!.value }));
              }
              // Return focus to body so user isn't surprised
              emailRef.current?.blur();
            }, 100);
          }
        }, 100);
      }
    }, 300);

    // Also try Credentials API silently
    if (window.PasswordCredential && navigator.credentials) {
      navigator.credentials
        .get({ password: true, mediation: 'silent' } as CredentialRequestOptions)
        .then((cred) => {
          if (cred && cred.type === 'password') {
            const pc = cred as PasswordCredential;
            setFormData((prev) => ({
              ...prev,
              name: (pc as any).name || (pc.id.includes('@') ? '' : pc.id) || prev.name,
              email: pc.id.includes('@') ? pc.id : prev.email,
            }));
          }
        })
        .catch(() => {});
    }

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }
      );
      setFormData({ name: '', email: '', message: '' });
      toast({ title: 'Message sent!', description: "Thanks for reaching out. I'll get back to you soon." });
    } catch {
      toast({ title: 'Failed to send', description: 'Something went wrong. Please email me directly.', variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-4 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">06 — Contact</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-8">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Let's work together</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Have a project in mind or want to collaborate? I'm currently open to new opportunities and would love to hear from you.
              </p>
            </div>

            <div className="space-y-2">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200 group">
                    <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                      <Icon size={15} className={item.color} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            autoComplete="on"
            className="lg:col-span-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 space-y-3"
          >
            <h3 className="text-lg font-semibold">Send a Message</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your Name</label>
                <input
                  ref={nameRef}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  autoComplete="name"
                  name="name"
                  className="w-full px-3 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  autoComplete="email"
                  name="email"
                  className="w-full px-3 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-black text-sm font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
