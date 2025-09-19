import { useLanguage } from '@/contexts/LanguageContext';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">{t('footer_title')}</h3>
                <p className="text-sm text-background/70">{t('footer_subtitle')}</p>
              </div>
            </div>
            <p className="text-background/80 max-w-md mb-6">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer_services_title')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-wet-cupping"
                >
                  {t('footer_wet_cupping')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-dry-cupping"
                >
                  {t('footer_dry_cupping')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-massage-cupping"
                >
                  {t('footer_massage_cupping')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-consultation"
                >
                  {t('footer_consultation')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer_info_title')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-about"
                >
                  {t('footer_about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-benefits"
                >
                  {t('footer_benefits')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-faq"
                >
                  {t('footer_faq')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-contact"
                >
                  {t('footer_contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            {t('footer_copyright')}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              {t('footer_privacy')}
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
