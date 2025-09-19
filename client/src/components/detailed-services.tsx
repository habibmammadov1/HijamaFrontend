import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Check } from 'lucide-react';

export default function DetailedServices() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            {t('services_detailed_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('services_detailed_subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {/* Wet Cupping Service */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm" data-testid="detailed-wet-cupping">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  <span>{t('service_featured')}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{t('wet_cupping_title')}</h3>
                <p className="text-lg text-muted-foreground mb-6">{t('wet_cupping_description')}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">{t('benefits_title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>{t('wet_benefit_1')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>{t('wet_benefit_2')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>{t('wet_benefit_3')}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={scrollToContact}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                    data-testid="book-wet-cupping"
                  >
                    {t('book_session')}
                  </button>
                  <button className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    {t('learn_process')}
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 mt-8 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                  alt="Professional cupping therapy setup" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>

          {/* Dry Cupping Service */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm" data-testid="detailed-dry-cupping">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                  alt="Dry cupping therapy session" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 mb-8 lg:mb-0">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{t('dry_cupping_title')}</h3>
                <p className="text-lg text-muted-foreground mb-6">{t('dry_cupping_description')}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">{t('ideal_for_title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      <span>{t('dry_ideal_1')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      <span>{t('dry_ideal_2')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      <span>{t('dry_ideal_3')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      <span>{t('dry_ideal_4')}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                    data-testid="book-dry-cupping"
                  >
                    {t('book_session')}
                  </button>
                  <button className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    {t('view_prices')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Massage Cupping Service */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm" data-testid="detailed-massage-cupping">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{t('massage_cupping_title')}</h3>
                <p className="text-lg text-muted-foreground mb-6">{t('massage_cupping_description')}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">{t('unique_benefits_title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-secondary mr-3" />
                      <span>{t('massage_benefit_1')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-secondary mr-3" />
                      <span>{t('massage_benefit_2')}</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-secondary mr-3" />
                      <span>{t('massage_benefit_3')}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={scrollToContact}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                    data-testid="book-massage-cupping"
                  >
                    {t('book_session')}
                  </button>
                  <button className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    {t('combination_packages')}
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 mt-8 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                  alt="Massage cupping therapy session" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
