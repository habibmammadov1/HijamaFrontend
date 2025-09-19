import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../lib/translations';

export type Language = 'en' | 'ru' | 'az';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language;
    return stored && ['en', 'ru', 'az'].includes(stored) ? stored : 'en';
  });

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return (translations[currentLanguage] as Record<string, string>)?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
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