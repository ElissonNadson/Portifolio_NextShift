import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/utils/LanguageContext';
import { Code, Globe, Smartphone, Database, Cloud, Shield } from 'lucide-react';

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const renderServices = (): ServiceItem[] => [
    {
      title: t('services.customDev.title'),
      description: t('services.customDev.description'),
      icon: <Code className="h-10 w-10 text-custom-purple" />,
    },
    {
      title: t('services.webApp.title'),
      description: t('services.webApp.description'),
      icon: <Globe className="h-10 w-10 text-custom-purple" />,
    },
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      icon: <Smartphone className="h-10 w-10 text-custom-purple" />,
    },
    {
      title: t('services.data.title'),
      description: t('services.data.description'),
      icon: <Database className="h-10 w-10 text-custom-purple" />,
    },
    {
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      icon: <Cloud className="h-10 w-10 text-custom-purple" />,
    },
    {
      title: t('services.security.title'),
      description: t('services.security.description'),
      icon: <Shield className="h-10 w-10 text-custom-purple" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 bg-custom-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {renderServices().map((service, index) => (
            <motion.div 
              key={index}
              className="bg-custom-dark-light p-6 rounded-lg border border-custom-purple/20 hover:border-custom-purple/40 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 