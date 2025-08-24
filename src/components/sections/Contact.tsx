import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.contact-card');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_4vw4q9i',   // remplace par ton Service ID EmailJS
      'template_0jn0wjk',  // remplace par ton Template ID EmailJS
      formData,            // objet avec {name, email, company, message}
      '_8T-0zc8b1dGbDcqa'    // remplace par ta Public Key EmailJS
    );

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
  } catch (error) {
    console.error(error);
    toast({
      title: "Error sending message",
      description: "Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: t('contact.email'),
      link: `mailto:${t('contact.email')}`
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+216 29 897 262 ',
      link: 'tel:+21629897262'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Menzeltmime,Nabeul',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--electric-blue))_1px,_transparent_0)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="contact-card fade-in-up">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-electric-blue/10 p-3 group-hover:bg-electric-blue/20 transition-colors duration-300">
                        <info.icon className="w-full h-full text-electric-blue" />
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground text-sm">
                          {info.title}
                        </div>
                        <div className="font-semibold group-hover:text-accent transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-card fade-in-up">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-electric-blue/10 p-3 hover:bg-electric-blue hover:text-white transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-full h-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-card fade-in-up">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="company"
                    placeholder="phonr number"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-electric h-12 text-lg group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      {t('contact.form.send')}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}