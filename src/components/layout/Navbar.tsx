import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/utils/LanguageContext';
import LanguageSelector from '@/components/layout/LanguageSelector';
import TeamLinksModal from '@/components/modals/TeamLinksModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const { t } = useLanguage();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.team') || 'Nossa Equipe', href: '#team' },
    { name: t('nav.faq') || 'FAQ', href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  // Social links (agora abrem o modal)
  const socialLinks = [
    {
      icon: <FaGithub size={20} />, 
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={20} />, 
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope size={20} />, 
      label: 'Email',
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-custom-dark/90 backdrop-blur-sm py-2 shadow-lg'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white flex-shrink-0">
            <span className="text-custom-purple">{t('company.name')}</span>
          </a>

          {/* Desktop Navigation Centralizado */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-custom-purple transition-colors font-medium"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social + Idioma à direita */}
          <div className="hidden md:flex items-center space-x-5 ml-6">
            {socialLinks.map((social, idx) => (
              <button
                key={social.label}
                aria-label={social.label}
                className="text-gray-200 hover:text-custom-purple transition-colors"
                onClick={() => setShowTeamModal(true)}
              >
                {social.icon}
              </button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-custom-dark/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-custom-purple transition-colors text-xl font-semibold"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            {/* Social icons mobile */}
            <div className="flex items-center space-x-6 pt-2">
              {socialLinks.map((social, idx) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="text-gray-200 hover:text-custom-purple transition-colors"
                  onClick={() => setShowTeamModal(true)}
                >
                  {social.icon}
                </button>
              ))}
            </div>
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
      <TeamLinksModal isOpen={showTeamModal} onClose={() => setShowTeamModal(false)} />
    </>
  );
};

export default Navbar; 