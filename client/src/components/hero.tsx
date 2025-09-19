import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
                data-testid="hero-book-session"
              >
                {t('hero_cta_primary')}
              </button>
              <button 
                onClick={scrollToAbout}
                className="border border-border hover:bg-muted text-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
                data-testid="hero-learn-more"
              >
                {t('hero_cta_secondary')}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional Hijama therapy room" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">{t('hero_badge')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
