import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Zap, Cloud, Lightbulb, Smile, Sun, Check } from 'lucide-react';

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Heart,
      title: t('benefit_circulation_title'),
      description: t('benefit_circulation_desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: t('benefit_detox_title'),
      description: t('benefit_detox_desc'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Cloud,
      title: t('benefit_pain_title'),
      description: t('benefit_pain_desc'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Lightbulb,
      title: t('benefit_immune_title'),
      description: t('benefit_immune_desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Smile,
      title: t('benefit_stress_title'),
      description: t('benefit_stress_desc'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Sun,
      title: t('benefit_sleep_title'),
      description: t('benefit_sleep_desc'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            {t('benefits_section_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('benefits_section_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6" data-testid={`benefit-${index}`}>
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {t('scientific_basis_title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t('scientific_basis_desc')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">{t('research_point_1')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">{t('research_point_2')}</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">{t('research_point_3')}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Scientific research documentation" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
