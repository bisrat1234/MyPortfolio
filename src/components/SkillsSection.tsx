const skills = [
  { name: 'React', level: 75, color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-500' },
  { name: 'Java', level: 70, color: 'from-red-400 to-red-600' },
  { name: 'PHP', level: 65, color: 'from-purple-400 to-purple-600' },
  { name: 'MySQL', level: 70, color: 'from-blue-400 to-blue-600' },
  { name: 'HTML/CSS', level: 85, color: 'from-orange-400 to-pink-500' },
  { name: 'MongoDB', level: 65, color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', level: 70, color: 'from-green-400 to-green-600' },
  { name: 'Express', level: 65, color: 'from-blue-400 to-blue-600' },
  { name: 'Git', level: 70, color: 'from-gray-400 to-gray-600' },
  { name: 'TypeScript', level: 75, color: 'from-blue-400 to-blue-600' },
];

const technologies = [
  'React', 'Java', 'JavaScript', 'PHP', 'MySQL', 'Node.js', 'Express',
  'Spring Boot', 'MongoDB', 'Git', 'REST API', 'Tailwind CSS'
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Skill bars */}
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 sm:h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Technology tags */}
            <div className="card-gradient rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary border border-border rounded-lg text-xs sm:text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['Mobile App Development', 'React Native', 'Flutter'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-xs sm:text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
