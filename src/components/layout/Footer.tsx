import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useLanguage } from '@/utils/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-custom-dark-light pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t('footer.company')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/adriel"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-custom-purple hover:text-white transition-colors p-2 rounded-full bg-custom-purple/10 hover:bg-custom-purple/20"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/adriel"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-custom-purple hover:text-white transition-colors p-2 rounded-full bg-custom-purple/10 hover:bg-custom-purple/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://wa.me/5575991707880"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-custom-purple hover:text-white transition-colors p-2 rounded-full bg-custom-purple/10 hover:bg-custom-purple/20"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-custom-purple transition-colors flex items-center">
                  <span className="w-2 h-2 bg-custom-purple rounded-full mr-2"></span>
                  {t('services.customDev.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-custom-purple transition-colors flex items-center">
                  <span className="w-2 h-2 bg-custom-purple rounded-full mr-2"></span>
                  {t('services.webApp.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-custom-purple transition-colors flex items-center">
                  <span className="w-2 h-2 bg-custom-purple rounded-full mr-2"></span>
                  {t('services.mobile.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-custom-purple transition-colors flex items-center">
                  <span className="w-2 h-2 bg-custom-purple rounded-full mr-2"></span>
                  {t('services.cloud.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xl font-bold text-white">{t('footer.contact')}</h3>
            <div className="bg-custom-purple/5 rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-custom-purple/10 p-2 rounded-lg">
                  <FaMapMarkerAlt size={20} className="text-custom-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Localização</h4>
                  <span className="text-gray-400">
                    Feira de Santana, Bahia
                    <br />Brasil
                  </span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-custom-purple/10 p-2 rounded-lg">
                  <FaPhone size={20} className="text-custom-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Telefone</h4>
                  <a 
                    href="https://wa.me/5575991707880" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-custom-purple transition-colors"
                  >
                    +55 (75) 99170-7880
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-custom-purple/10 p-2 rounded-lg">
                  <FaEnvelope size={20} className="text-custom-purple" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:adriel@nextshift.com" className="text-gray-400 hover:text-custom-purple transition-colors">
                    adriel@nextshift.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Next Shift. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-custom-purple text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-custom-purple text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 