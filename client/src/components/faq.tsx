import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems = [
    {
      id: 'faq1',
      question: t('faq_q1'),
      answer: t('faq_a1'),
    },
    {
      id: 'faq2',
      question: t('faq_q2'),
      answer: t('faq_a2'),
    },
    {
      id: 'faq3',
      question: t('faq_q3'),
      answer: t('faq_a3'),
    },
    {
      id: 'faq4',
      question: t('faq_q4'),
      answer: t('faq_a4'),
    },
    {
      id: 'faq5',
      question: t('faq_q5'),
      answer: t('faq_a5'),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t('faq_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq_subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-card rounded-xl shadow-sm" data-testid={`faq-item-${item.id}`}>
              <button
                className="w-full text-left p-6 flex justify-between items-center accordion-trigger"
                onClick={() => toggleItem(item.id)}
                data-testid={`faq-trigger-${item.id}`}
              >
                <span className="font-semibold text-foreground">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`accordion-content ${openItem === item.id ? 'active' : ''}`}
                data-testid={`faq-content-${item.id}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
