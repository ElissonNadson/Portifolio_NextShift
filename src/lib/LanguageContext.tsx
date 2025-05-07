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
    'projects.Quack.title': 'Quack ()',
    'projects.Quack.description': 'Quack () turns learning IT into a gamified, hands-on experience, entirely in Portuguese. With interactive tracks in Backend, Frontend, and Architecture, fun challenges, and an engaged community, you’ll overcome technical complexity and the language barrier. Get ready for a high-demand job market with attractive salaries and flexibility. Start now and grow alongside other developers!',
    'projects.SusSenai.title': 'Sus Whitout Delay',
    'projects.SusSenai.description': 'SUS sem Fila simplifies access to appointment scheduling, shows in real time which professionals are available at emergency rooms and nearby clinics, and indicates where to get exams done. No more wasting hours in lines! Speed up your care in the public health system with accurate and up-to-date information. Download now and take care of your health with ease.',
    'projects.ParkPass.title': 'ParkPass',
    'projects.ParkPass.description': 'Parkpass is revolutionizing the search for parking spots with smart sensors that detect real-time availability. Download the app, get notified as you approach a parking lot, and find open spots effortlessly — all fully automated, like a “Gympass” for parking. No more wasting time driving in circles!',
    'projects.ThigasSalon.title': 'Thigas pet Salon',
    'projects.ThigasSalon.description': 'Thigas Pet Salon makes it easy to schedule baths, grooming, vet visits, and other pet services. Choose times, services, and available professionals in real time, get reminders, and manage everything through the app. Your pet deserves convenience!',
    'projects.EcoTrack.title': 'EcoTrack',
    'projects.EcoTrack.description': 'EcoTrack helps you understand your daily carbon footprint and empowers you to reduce it. Track your emissions in real time, get smart comparisons, and discover actionable tips to make more sustainable choices. Whether youre commuting, shopping, or cooking, EcoTrack turns awareness into action. Take control of your environmental impact — one day at a time!',
    'projects.AgriSense.title': 'AgriSense',
    'projects.AgriSense.description': 'AgriSense brings intelligent plant care to your fingertips. Monitor plant health in real time with advanced sensors that track everything from soil moisture to sunlight and temperature. Get alerts, insights, and recommendations to keep your crops thriving. Whether in a greenhouse or in the field, AgriSense connects you to what your plants need — when they need it.',

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
    'projects.Quack.title': 'Quack ()',
    'projects.Quack.description': 'O Quack ()  transforma o aprendizado de TI em uma experiência gamificada, prática e 100% em português. Com trilhas interativas em Backend, Frontend e Arquitetura, desafios divertidos e uma comunidade engajada, você supera a complexidade técnica e a barreira do inglês. Prepare-se para um mercado em alta demanda, com salários atrativos e flexibilidade. Comece agora e evolua junto com outros programadores!',
    'projects.SusSenai.title': 'Sus sem Fila',
    'projects.SusSenai.description': 'O SUS sem Fila simplifica o acesso ao agendamento de consultas, mostra em tempo real quais profissionais estão disponíveis em PS e policlínicas próximas, e indica onde realizar exames. Chega de perder horas em filas! Agilize seu atendimento no SUS com informações precisas e atualizadas. Baixe agora e cuide da sua saúde com praticidade.',
    'projects.ParkPass.title': 'ParkPass',
    'projects.ParkPass.description': ' O Parkpass revoluciona a busca por vagas com sensores inteligentes que detectam disponibilidade em tempo real. Baixe o app, receba notificações ao se aproximar de um estacionamento e encontre vagas livremente – tudo de forma automatizada, como um "Gympass" para estacionamentos. Chega de perder tempo circulando!',
    'projects.ThigasSalon.title': 'Thigas pet Salon',
    'projects.ThigasSalon.description': 'O Thigas Pet Salon simplifica o agendamento de banho, tosa, veterinário e outros serviços pet. Escolha horários, serviços e profissionais disponíveis em tempo real, receba lembretes e gerencie tudo pelo app. Seu pet merece praticidade!',
    'projects.EcoTrack.title': 'EcoTrack',
    'projects.EcoTrack.description': 'O EcoTrack ajuda você a entender sua pegada de carbono diária e te dá o poder de reduzi-la. Acompanhe suas emissões em tempo real, veja comparações inteligentes e descubra dicas práticas para tomar decisões mais sustentáveis. Seja no transporte, nas compras ou na cozinha, o EcoTrack transforma consciência em ação. Assuma o controle do seu impacto ambiental — um dia de cada vez!',
    'projects.AgriSense.title': 'AgriSense',
    'projects.AgriSense.description': 'AgriSense brings intelligent plant care to your fingertips. Monitor plant health in real time with advanced sensors that track everything from soil moisture to sunlight and temperature. Get alerts, insights, and recommendations to keep your crops thriving. Whether in a greenhouse or in the field, AgriSense connects you to what your plants need — when they need it.',

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