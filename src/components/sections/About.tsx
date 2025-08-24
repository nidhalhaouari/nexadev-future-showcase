import { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.about-card, .stat-card');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.text'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: t('about.vision.title'),
      description: t('about.vision.text'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: t('about.values.title'),
      description: t('about.values.text'),
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Award, number: '80+', label: 'Projects Completed' },
    { icon: Zap, number: '2+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-electric-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="about-card fade-in-up glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-full h-full text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-muted/20 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card fade-in-up text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 p-3 group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <stat.icon className="w-full h-full text-electric-blue" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Our Expert Team
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of developers, designers, and strategists who believe in the power of technology to transform businesses. With diverse backgrounds and unified goals, we bring together the best minds to solve complex challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}