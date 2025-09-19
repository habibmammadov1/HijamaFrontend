import { useState, useEffect } from 'react';
import { translations } from '../lib/translations';

export type Language = 'en' | 'ru' | 'az';

export function useLanguage() {
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

  return {
    currentLanguage,
    changeLanguage,
    t,
  };
}
