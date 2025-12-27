import { Button } from '@/components/ui/button';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open email client with pre-filled message
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:damitachewyiradu@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your message has been prepared. Please send the email to complete.",
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="card-gradient rounded-2xl p-6 sm:p-8 border border-border">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <a 
                    href="mailto:damitachewyiradu@gmail.com"
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-all shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-sm sm:text-base truncate">damitachewyiradu@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/bisrat1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-all shrink-0">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-sm sm:text-base">github.com/bisrat1234</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-sm sm:text-base">Debre Markos, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="card-gradient rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
