import { Code2, GraduationCap, Rocket } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left side - Terminal style info */}
            <div className="card-gradient rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs sm:text-sm text-muted-foreground font-mono">about.json</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`{
  "name": "`}<span className="text-primary">Damitachew Yiradu</span>{`",
  "role": "`}<span className="text-green-400">Full Stack Developer</span>{`",
  "university": "`}<span className="text-yellow-400">Debre Markos University</span>{`",
  "year": "`}<span className="text-blue-400">4th Year</span>{`",
  "major": "`}<span className="text-purple-400">Software Engineering</span>{`",
  "passions": [
    "Building web applications",
    "Learning new technologies",
    "Problem solving"
  ]
}`}
                </code>
              </pre>
            </div>

            {/* Right side - Info cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="card-gradient rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-all shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Education</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Currently pursuing Software Engineering at Debre Markos University, 
                      building a strong foundation in computer science and software development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-all shrink-0">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Development</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Specialized in full-stack development with React for frontend, 
                      Java for backend, and modern JavaScript throughout the stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-sm transition-all shrink-0">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Goals</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Passionate about creating impactful software solutions and 
                      continuously learning new technologies to stay at the cutting edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
