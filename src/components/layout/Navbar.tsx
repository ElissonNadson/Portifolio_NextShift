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

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
  const isAtTop = window.scrollY === 0;

  if (isOpen) {
    // Fechar o menu
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  } else {
    // Voltar ao topo antes de abrir o menu
    if (!isAtTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Aguarda a rolagem antes de abrir o menu
      setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }, 400); // Ajuste o tempo conforme a duração da rolagem
    } else {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }
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
          {/* Logo com SVG */}
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white flex-shrink-0">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="none"
                className="w-12 h-12 mr-[-20px] mt-[15px]  align-middle"
              >
                <path
                  d="M427,360 L426,361 L424,361 L423,362 L422,362 L421,363 L420,363 L416,367 L416,368 L411,373 L411,374 L407,378 L407,379 L401,385 L401,386 L396,391 L396,392 L391,397 L391,398 L385,404 L385,405 L380,410 L380,411 L374,417 L374,418 L369,423 L369,424 L364,429 L364,430 L359,435 L359,436 L354,441 L354,442 L350,446 L350,447 L348,449 L348,450 L347,451 L347,456 L350,459 L351,459 L352,460 L398,460 L399,459 L401,459 L402,458 L403,458 L408,453 L408,452 L414,446 L414,445 L419,440 L419,439 L424,434 L424,433 L429,428 L429,427 L434,422 L434,421 L440,415 L440,414 L445,409 L445,408 L450,403 L450,402 L455,397 L455,396 L460,391 L460,390 L466,384 L466,383 L471,378 L471,377 L474,374 L474,373 L475,372 L475,366 L474,365 L474,364 L472,362 L471,362 L470,361 L469,361 L468,360 Z"
                  fill="#837BFF"
                />
                <path
                  d="M398,218 L397,219 L395,219 L394,220 L393,220 L392,221 L392,222 L391,223 L391,226 L392,227 L392,228 L393,229 L393,230 L396,233 L396,234 L399,237 L399,238 L403,242 L403,243 L408,248 L408,249 L415,256 L415,257 L422,264 L422,265 L430,273 L430,274 L437,281 L437,282 L445,290 L445,291 L453,299 L453,300 L460,307 L460,308 L468,316 L468,317 L475,324 L475,325 L483,333 L483,334 L491,342 L491,343 L499,351 L499,352 L506,359 L506,360 L513,367 L513,368 L517,372 L517,373 L520,376 L520,377 L521,378 L521,379 L522,380 L522,383 L521,384 L521,386 L519,388 L519,389 L514,394 L514,395 L508,401 L508,402 L502,408 L502,409 L497,414 L497,415 L491,421 L491,422 L485,428 L485,429 L480,434 L480,435 L474,441 L474,442 L468,448 L468,449 L463,454 L463,455 L457,461 L457,462 L451,468 L451,469 L445,475 L445,476 L440,481 L440,482 L434,488 L434,489 L428,495 L428,496 L423,501 L423,502 L417,508 L417,509 L411,515 L411,516 L406,521 L406,522 L401,527 L401,528 L395,534 L395,535 L394,536 L394,541 L395,542 L395,543 L396,544 L397,544 L398,545 L401,545 L402,546 L433,546 L434,545 L442,545 L443,546 L444,546 L445,545 L447,545 L448,546 L451,546 L452,545 L455,545 L456,546 L457,545 L482,545 L483,544 L484,544 L485,543 L486,543 L495,534 L495,533 L501,527 L501,526 L508,519 L508,518 L514,512 L514,511 L520,505 L520,504 L526,498 L526,497 L531,492 L531,491 L538,484 L538,483 L543,478 L543,477 L550,470 L550,469 L556,463 L556,462 L563,455 L563,454 L569,448 L569,447 L574,442 L574,441 L581,434 L581,433 L588,426 L588,425 L594,419 L594,418 L600,412 L600,411 L606,405 L606,404 L613,397 L613,396 L618,391 L618,390 L620,388 L620,387 L621,386 L621,378 L620,377 L620,376 L618,374 L618,373 L612,367 L612,366 L606,360 L606,359 L598,351 L598,350 L590,342 L590,341 L582,333 L582,332 L574,324 L574,323 L567,316 L567,315 L559,307 L559,306 L552,299 L552,298 L544,290 L544,289 L537,282 L537,281 L530,274 L530,273 L522,265 L522,264 L515,257 L515,256 L508,249 L508,248 L502,242 L502,241 L498,237 L498,236 L495,233 L495,232 L494,231 L494,228 L493,227 L493,225 L492,224 L491,223 L490,222 L489,222 L487,221 L486,221 L484,220 L483,220 L482,219 L481,219 L480,218 Z"
                  fill="#837BFF"
                />
              </svg>
            <span className="text-custom-purple ">{t('company.name')}</span>
          </a>

          {/* Desktop Navigation Centralizado */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                      closeMenu(); // fecha o menu se for mobile
                    }
                  }}
                  className="text-gray-300 hover:text-custom-purple transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social + Idioma à direita */}
          <div className="hidden md:flex items-center space-x-5 ml-6">
            {socialLinks.map((social) => (
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
              <button
                key={link.name}
                onClick={() => {
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    closeMenu(); // fecha o menu
                  }
                }}
                className="text-white hover:text-custom-purple transition-colors text-xl font-semibold"
              >
                {link.name}
              </button>
            ))}
            {/* Social icons mobile */}
            <div className="flex items-center space-x-6 pt-2">
              {socialLinks.map((social) => (
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
function goto(arg0: string) {
  throw new Error('Function not implemented.');
}

