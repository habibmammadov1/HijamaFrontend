import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Experienced Hijama practitioner" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              {t('about_title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about_desc1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('about_desc2')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('about_feature1_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about_feature1_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('about_feature2_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about_feature2_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('about_feature3_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about_feature3_desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t('about_feature4_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about_feature4_desc')}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              data-testid="about-meet-team"
            >
              {t('about_cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
