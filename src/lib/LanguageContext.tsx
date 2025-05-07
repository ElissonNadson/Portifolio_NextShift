import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Company name
    'company.name': 'Next Shift',
    
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.welcome': 'Welcome to',
    'hero.subtitle': 'We transform ideas into products with efficiency, strategy, and technical excellence',
    'hero.description': 'Specialized in development and technological innovation, offering intelligent solutions, custom systems, and comprehensive technical support.',
    'hero.cta': 'Get in Touch',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'At Next Shift, we offer comprehensive technical solutions to help you navigate the digital landscape and transform your ideas into reality.',
    'services.customDev.title': 'Custom Development',
    'services.customDev.description': 'Tailored software solutions designed to meet your specific business needs and objectives.',
    'services.webApp.title': 'Web Applications',
    'services.webApp.description': 'Modern, responsive web applications using the latest technologies and frameworks.',
    'services.mobile.title': 'Mobile Solutions',
    'services.mobile.description': 'Native and cross-platform mobile apps delivering exceptional user experiences.',
    'services.data.title': 'Data Management',
    'services.data.description': 'Efficient database designs, migrations, and data-driven application architecture.',
    'services.cloud.title': 'Cloud Services',
    'services.cloud.description': 'Scalable cloud solutions leveraging AWS, Azure, and Google Cloud platforms.',
    'services.security.title': 'IT Security',
    'services.security.description': 'Comprehensive security assessments and implementations to protect your digital assets.',

    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Explore our portfolio of successful projects that demonstrate our technical expertise and innovative solutions.',
    'projects.viewDetails': 'View Details',
    
    // Project Cards
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.description': 'A comprehensive e-commerce solution with inventory management, payment processing, and customer analytics.',
    'projects.health.title': 'Health Monitoring App',
    'projects.health.description': 'Mobile application for tracking health metrics, scheduling appointments, and connecting with healthcare providers.',
    'projects.smartcity.title': 'Smart City Dashboard',
    'projects.smartcity.description': 'Real-time monitoring dashboard for municipal services, including utilities, transportation, and public safety.',
    'projects.supplychain.title': 'Supply Chain Management',
    'projects.supplychain.description': 'End-to-end logistics platform for tracking products from manufacturer to consumer with blockchain verification.',
    'projects.education.title': 'Educational Learning Platform',
    'projects.education.description': 'Interactive learning environment with courses, quizzes, progress tracking, and video conferencing.',
    'projects.finance.title': 'Financial Analytics Tool',
    'projects.finance.description': 'Advanced analytics dashboard for investment portfolio management with predictive AI capabilities.',

    // Footer
    'footer.company': 'Next Shift',
    'footer.description': 'We turn ideas into products with efficiency, strategy, and technical excellence.',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Company name
    'company.name': 'Next Shift',
    
    // Navbar
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.welcome': 'Bem-vindo à',
    'hero.subtitle': 'Transformamos ideias em produtos com eficiência, estratégia e excelência técnica',
    'hero.description': 'Especializada em desenvolvimento e inovação tecnológica, oferecendo soluções inteligentes, sistemas personalizados e suporte técnico completo.',
    'hero.cta': 'Entre em Contato',

    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Na Next Shift, oferecemos soluções técnicas abrangentes para ajudá-lo a navegar pelo cenário digital e transformar suas ideias em realidade.',
    'services.customDev.title': 'Desenvolvimento Personalizado',
    'services.customDev.description': 'Soluções de software sob medida projetadas para atender às necessidades e objetivos específicos do seu negócio.',
    'services.webApp.title': 'Aplicações Web',
    'services.webApp.description': 'Aplicações web modernas e responsivas usando as mais recentes tecnologias e frameworks.',
    'services.mobile.title': 'Soluções Mobile',
    'services.mobile.description': 'Aplicativos móveis nativos e multiplataforma que proporcionam experiências excepcionais aos usuários.',
    'services.data.title': 'Gestão de Dados',
    'services.data.description': 'Designs eficientes de banco de dados, migrações e arquitetura de aplicativos orientada a dados.',
    'services.cloud.title': 'Serviços em Nuvem',
    'services.cloud.description': 'Soluções em nuvem escaláveis aproveitando as plataformas AWS, Azure e Google Cloud.',
    'services.security.title': 'Segurança de TI',
    'services.security.description': 'Avaliações e implementações abrangentes de segurança para proteger seus ativos digitais.',

    // Projects
    'projects.title': 'Nossos Projetos',
    'projects.subtitle': 'Explore nosso portfólio de projetos bem-sucedidos que demonstram nossa expertise técnica e soluções inovadoras.',
    'projects.viewDetails': 'Ver Detalhes',
    
    // Project Cards
    'projects.ecommerce.title': 'Plataforma de E-Commerce',
    'projects.ecommerce.description': 'Uma solução abrangente de comércio eletrônico com gerenciamento de inventário, processamento de pagamentos e análise de clientes.',
    'projects.health.title': 'App de Monitoramento de Saúde',
    'projects.health.description': 'Aplicativo móvel para acompanhamento de métricas de saúde, agendamento de consultas e conexão com profissionais de saúde.',
    'projects.smartcity.title': 'Dashboard de Cidade Inteligente',
    'projects.smartcity.description': 'Painel de monitoramento em tempo real para serviços municipais, incluindo utilidades, transporte e segurança pública.',
    'projects.supplychain.title': 'Gestão de Cadeia de Suprimentos',
    'projects.supplychain.description': 'Plataforma logística completa para rastreamento de produtos do fabricante ao consumidor com verificação blockchain.',
    'projects.education.title': 'Plataforma de Aprendizado Educacional',
    'projects.education.description': 'Ambiente de aprendizado interativo com cursos, quizzes, acompanhamento de progresso e videoconferência.',
    'projects.finance.title': 'Ferramenta de Análise Financeira',
    'projects.finance.description': 'Dashboard avançado de análise para gestão de portfólio de investimentos com recursos de IA preditiva.',

    // Footer
    'footer.company': 'Next Shift',
    'footer.description': 'Transformamos ideias em produtos com eficiência, estratégia e excelência técnica.',
    'footer.services': 'Nossos Serviços',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 