import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/utils/LanguageContext';
import broImage from '/projects/acessorios/Tele-computador.svg';
import graphic1 from '/projects/acessorios/Graphic-1.svg';
import graphic2 from '/projects/acessorios/Graphic.svg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-custom-dark to-custom-dark-light relative overflow-hidden">
      {/* Background Graphics */}
      <motion.img
        src={graphic1}
        alt=""
        className="absolute top-1/4 left-10 opacity-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.img
        src={graphic2}
        alt=""
        className="absolute bottom-1/4 right-10 opacity-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left mx-4 md:mx-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {t('hero.welcome')} <span className="text-custom-purple">{t('company.name')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-400 mb-8"
            >
              {t('hero.description')}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-custom-purple text-white px-8 py-3 rounded-lg flex items-center justify-center md:justify-start space-x-2 hover:bg-opacity-90 transition-all mx-auto md:mx-0"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-custom-purple to-blue-500 opacity-20 blur-3xl absolute"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-custom-purple"
            >
              <img
                src={broImage}
                alt="Next Shift Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 