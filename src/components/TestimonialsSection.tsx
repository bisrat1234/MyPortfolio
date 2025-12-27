import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Alemayehu Tadesse',
    role: 'Software Engineering Professor',
    company: 'Debre Markos University',
    content: 'Damitachew consistently demonstrates exceptional problem-solving skills and a deep understanding of software engineering principles. His projects show great attention to detail and modern development practices.',
    rating: 5,
  },
  {
    name: 'Biruk Mengistu',
    role: 'Team Lead',
    company: 'Group Project Partner',
    content: 'Working with Damitachew on our clearance management system was a great experience. He brings innovative solutions and maintains high code quality throughout the development process.',
    rating: 5,
  },
  {
    name: 'Meron Tadesse',
    role: 'Fellow Student',
    company: 'Study Group',
    content: 'Damitachew is always willing to help others and share his knowledge. His expertise in both frontend and backend development makes him a valuable team member.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What People <span className="text-gradient">Say</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Feedback from professors, peers, and collaborators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-gradient rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Quote size={20} className="text-primary" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};