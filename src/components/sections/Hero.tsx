import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-electric-muted opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-electric-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/5743d107-80ba-41c0-82e8-356d919c7eb9.png" 
                alt="NEXADEV" 
                className="h-16 w-auto animate-glow"
              />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-electric-blue animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">
              {t('hero.slogan')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="btn-electric text-lg px-8 py-4 rounded-full group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats or Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Mobile Apps</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>AI Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}