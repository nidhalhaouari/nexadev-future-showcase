import { useEffect, useRef } from 'react';
import { Monitor, Smartphone, Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 200);
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

  const services = [
    {
      icon: Monitor,
      title: t('services.web.title'),
      description: t('services.web.description'),
      gradient: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      gradient: 'from-purple-500 to-pink-500',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      gradient: 'from-green-500 to-emerald-500',
      technologies: ['Machine Learning', 'OpenAI', 'TensorFlow', 'Python']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--electric-blue))_1px,_transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('services.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card fade-in-up glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-electric-muted text-electric-blue rounded-full border border-electric-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="flex items-center mt-6 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-medium mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}