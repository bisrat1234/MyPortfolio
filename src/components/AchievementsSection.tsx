import { Award, Calendar, Users, Code } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Maintaining high GPA in Software Engineering program',
    date: '2021 - Present',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Code,
    title: 'Full Stack Projects',
    description: 'Developed multiple end-to-end applications using modern technologies',
    date: '2023 - 2024',
    color: 'from-blue-400 to-purple-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Successfully worked on group projects and collaborative development',
    date: '2022 - Present',
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: Calendar,
    title: 'Continuous Learning',
    description: 'Actively learning new technologies and staying updated with industry trends',
    date: 'Ongoing',
    color: 'from-pink-400 to-red-500',
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Key milestones and achievements in my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="card-gradient rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-10 group-hover:glow-sm transition-all shrink-0`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-muted-foreground font-mono">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Projects Completed', value: '3+' },
              { label: 'Technologies Used', value: '12+' },
              { label: 'Years of Study', value: '4' },
              { label: 'GitHub Repos', value: '10+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 card-gradient rounded-xl border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};