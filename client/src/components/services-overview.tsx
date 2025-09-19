import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Zap, Cloud } from 'lucide-react';

export default function ServicesOverview() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t('services_overview_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services_overview_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="service-wet-cupping">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">{t('service_wet_cupping_title')}</h3>
            <p className="text-muted-foreground mb-6">{t('service_wet_cupping_desc')}</p>
            <button 
              onClick={scrollToServices}
              className="text-primary font-medium hover:text-primary/80"
              data-testid="learn-more-wet"
            >
              {t('learn_more')}
            </button>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="service-dry-cupping">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">{t('service_dry_cupping_title')}</h3>
            <p className="text-muted-foreground mb-6">{t('service_dry_cupping_desc')}</p>
            <button 
              onClick={scrollToServices}
              className="text-primary font-medium hover:text-primary/80"
              data-testid="learn-more-dry"
            >
              {t('learn_more')}
            </button>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-testid="service-massage-cupping">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">{t('service_massage_cupping_title')}</h3>
            <p className="text-muted-foreground mb-6">{t('service_massage_cupping_desc')}</p>
            <button 
              onClick={scrollToServices}
              className="text-primary font-medium hover:text-primary/80"
              data-testid="learn-more-massage"
            >
              {t('learn_more')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
