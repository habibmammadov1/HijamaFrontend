import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-3">
              <span className="text-primary-foreground font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold text-foreground">{t('header_title')}</h1>
              <p className="text-sm text-muted-foreground">{t('header_subtitle')}</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              {t('nav_home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              {t('nav_about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              {t('nav_services')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-benefits"
            >
              {t('nav_benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-faq"
            >
              {t('nav_faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              {t('nav_contact')}
            </button>
          </nav>
          
          {/* Phone & Language Selector */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm text-muted-foreground">{t('phone_label')}</span>
              <a href="tel:+994501234567" className="text-foreground font-medium hover:text-primary">+994 50 123 45 67</a>
            </div>
            
            {/* Language Selector */}
            <div className="flex bg-muted rounded-md p-1">
              <button 
                onClick={() => changeLanguage('en')}
                className={`language-btn px-3 py-1 text-sm rounded ${currentLanguage === 'en' ? 'active' : ''}`}
                data-testid="lang-en"
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ru')}
                className={`language-btn px-3 py-1 text-sm rounded ${currentLanguage === 'ru' ? 'active' : ''}`}
                data-testid="lang-ru"
              >
                RU
              </button>
              <button 
                onClick={() => changeLanguage('az')}
                className={`language-btn px-3 py-1 text-sm rounded ${currentLanguage === 'az' ? 'active' : ''}`}
                data-testid="lang-az"
              >
                AZ
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 ${isMobileMenuOpen ? 'active' : ''}`} data-testid="mobile-menu-drawer">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-lg font-semibold">Menu</h2>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              data-testid="mobile-menu-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-home"
            >
              {t('nav_home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-about"
            >
              {t('nav_about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-services"
            >
              {t('nav_services')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-benefits"
            >
              {t('nav_benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-faq"
            >
              {t('nav_faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-contact"
            >
              {t('nav_contact')}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </header>
  );
}
