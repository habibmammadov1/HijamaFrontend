import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.privacy) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and privacy agreement are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {t('contact_form_title')}
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form_name_label')}
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                      placeholder={t('form_name_placeholder')}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form_email_label')}
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                      placeholder={t('form_email_placeholder')}
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form_phone_label')}
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                      placeholder={t('form_phone_placeholder')}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('form_service_label')}
                    </label>
                    <select 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                      data-testid="select-service"
                    >
                      <option value="">{t('form_service_select')}</option>
                      <option value="wet-cupping">{t('form_service_wet')}</option>
                      <option value="dry-cupping">{t('form_service_dry')}</option>
                      <option value="massage-cupping">{t('form_service_massage')}</option>
                      <option value="consultation">{t('form_service_consultation')}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form_message_label')}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder={t('form_message_placeholder')}
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="privacy" 
                    id="privacy" 
                    required 
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-ring border-border rounded"
                    data-testid="checkbox-privacy"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-muted-foreground">
                    <span>{t('form_privacy_text')}</span>
                    <a href="#" className="text-primary hover:text-primary/80">{t('form_privacy_policy')}</a>
                    <span>{t('form_privacy_terms')}</span>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-semibold transition-colors"
                  data-testid="button-submit"
                >
                  {t('form_submit_button')}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8">
              {/* Clinic Information */}
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">{t('clinic_info_title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{t('clinic_address_label')}</p>
                      <p className="text-muted-foreground">{t('clinic_address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{t('clinic_phone_label')}</p>
                      <a href="tel:+994501234567" className="text-muted-foreground hover:text-primary">
                        +994 50 123 45 67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">{t('clinic_email_label')}</p>
                      <a href="mailto:info@hijamawellness.az" className="text-muted-foreground hover:text-primary">
                        info@hijamawellness.az
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">{t('hours_title')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('hours_monday')}</span>
                    <span className="text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('hours_saturday')}</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('hours_sunday')}</span>
                    <span className="text-foreground">{t('hours_closed')}</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">{t('location_title')}</h3>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">{t('map_placeholder')}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {t('directions_note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
