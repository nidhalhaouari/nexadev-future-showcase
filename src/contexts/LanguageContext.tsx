import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.slogan': 'Building the Future with Web, Mobile & AI',
    'hero.subtitle': 'We create innovative digital solutions that transform businesses and drive growth in the modern world.',
    'hero.cta': 'Work with Us',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We specialize in cutting-edge technologies to bring your vision to life',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, responsive websites and web applications built with the latest technologies.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    'services.ai.title': 'AI Solutions',
    'services.ai.description': 'Intelligent systems and machine learning solutions to automate and optimize your business.',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover some of our recent projects and success stories',
    'portfolio.learnMore': 'Learn More',
    
    // About
    'about.title': 'About NEXADEV',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To empower businesses with innovative technology solutions that drive growth and efficiency.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the leading technology partner for companies looking to transform digitally.',
    'about.values.title': 'Our Values',
    'about.values.text': 'Innovation, quality, collaboration, and customer success are at the heart of everything we do.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your next project? Let\'s discuss how we can help you achieve your goals.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.email': 'contact@nexadev.com',
  },
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.slogan': 'Construire l\'Avenir avec le Web, Mobile et IA',
    'hero.subtitle': 'Nous créons des solutions numériques innovantes qui transforment les entreprises et stimulent la croissance dans le monde moderne.',
    'hero.cta': 'Travaillez avec Nous',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Nous nous spécialisons dans les technologies de pointe pour donner vie à votre vision',
    'services.web.title': 'Développement Web',
    'services.web.description': 'Sites web et applications web modernes et responsives construits avec les dernières technologies.',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.description': 'Applications mobiles natives et multiplateformes qui offrent des expériences utilisateur exceptionnelles.',
    'services.ai.title': 'Solutions IA',
    'services.ai.description': 'Systèmes intelligents et solutions d\'apprentissage automatique pour automatiser et optimiser votre entreprise.',
    
    // Portfolio
    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Découvrez quelques-uns de nos projets récents et nos réussites',
    'portfolio.learnMore': 'En Savoir Plus',
    
    // About
    'about.title': 'À Propos de NEXADEV',
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Autonomiser les entreprises avec des solutions technologiques innovantes qui stimulent la croissance et l\'efficacité.',
    'about.vision.title': 'Notre Vision',
    'about.vision.text': 'Être le partenaire technologique de référence pour les entreprises cherchant à se transformer numériquement.',
    'about.values.title': 'Nos Valeurs',
    'about.values.text': 'L\'innovation, la qualité, la collaboration et le succès client sont au cœur de tout ce que nous faisons.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.email': 'contact@nexadev.com',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}