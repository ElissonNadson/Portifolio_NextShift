import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Lightbulb, CloudCog, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Technologies = () => {
  const { t } = useLanguage();

  const services = [
    { 
      name: t('services.customDev.title'), 
      icon: Code2, 
      description: t('services.customDev.description')
    },
    { 
      name: t('services.webApp.title'), 
      icon: Globe, 
      description: t('services.webApp.description')
    },
    { 
      name: t('services.mobile.title'), 
      icon: Layout, 
      description: t('services.mobile.description')
    },
    { 
      name: t('services.data.title'), 
      icon: Database, 
      description: t('services.data.description')
    },
    { 
      name: t('services.cloud.title'), 
      icon: CloudCog, 
      description: t('services.cloud.description')
    },
    { 
      name: t('services.security.title'), 
      icon: ShieldCheck, 
      description: t('services.security.description')
    },
  ];

  return (
    <section id="services" className="py-20 bg-custom-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          {t('services.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          {t('services.subtitle')}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <service.icon className="w-12 h-12 text-custom-purple mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;