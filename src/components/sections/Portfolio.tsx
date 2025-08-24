import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.portfolio-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'FinTech Mobile App',
      description: 'Secure banking application with biometric authentication and advanced financial tools.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      category: 'Mobile Development',
      technologies: ['React Native', 'TypeScript', 'Blockchain', 'Security'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI ChatBot Platform',
      description: 'Intelligent customer service platform with natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      category: 'AI Solution',
      technologies: ['Python', 'OpenAI', 'NLP', 'Machine Learning'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Comprehensive healthcare management system with real-time patient monitoring.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
      category: 'Web Development',
      technologies: ['Vue.js', 'Python', 'IoT', 'Data Analytics'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Smart City IoT',
      description: 'IoT-based smart city solution for traffic management and environmental monitoring.',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80',
      category: 'AI Solution',
      technologies: ['IoT', 'Machine Learning', 'React', 'Python'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Social Media App',
      description: 'Next-generation social platform with AR features and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Firebase', 'AR', 'Cloud'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('portfolio.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card fade-in-up group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-electric-muted text-electric-blue rounded-full border border-electric-blue/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="mr-2">{t('portfolio.learnMore')}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}