import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import logo from '../assets/icons8-código-fonte-32.png'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/lib/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-custom-dark/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <img src={logo} alt="Logo" />
            <span className="text-white font-semibold italic text-xl">
              {t('company.name')}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 font-medium hover:text-custom-purple transition-colors capitalize"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/nextshift"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-custom-purple transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/nextshift"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-custom-purple transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@nextshift.com"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-custom-purple transition-colors"
            >
              <Mail size={20} />
            </a>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
