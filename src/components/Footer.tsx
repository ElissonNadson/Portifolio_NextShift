import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const services = [
    t('services.customDev.title'),
    t('services.webApp.title'),
    t('services.mobile.title'),
    t('services.data.title'),
    t('services.cloud.title'),
    t('services.security.title')
  ];

  return (
    <footer id="contact" className="bg-custom-dark py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('footer.company')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nextshift"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-custom-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/company/nextshift"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-custom-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-custom-purple mt-1" size={18} />
                <span className="text-gray-400">123 Technology Plaza, Innovation District, 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-custom-purple" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-custom-purple" size={18} />
                <span className="text-gray-400">contact@nextshift.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('company.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;