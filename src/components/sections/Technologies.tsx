import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/utils/LanguageContext';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaPython, 
  FaAws, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiFirebase,
  SiExpress
} from 'react-icons/si';

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const Technologies: React.FC = () => {
  const { language } = useLanguage();

  const techList: TechItem[] = [
    { name: 'React', icon: <FaReact className="h-12 w-12 text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="h-12 w-12 text-[#339933]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="h-12 w-12 text-[#3178C6]" /> },
    { name: 'Python', icon: <FaPython className="h-12 w-12 text-[#3776AB]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="h-12 w-12 text-[#47A248]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="h-12 w-12 text-[#336791]" /> },
    { name: 'AWS', icon: <FaAws className="h-12 w-12 text-[#FF9900]" /> },
    { name: 'Docker', icon: <FaDocker className="h-12 w-12 text-[#2496ED]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-12 w-12 text-[#06B6D4]" /> },
    { name: 'GraphQL', icon: <SiGraphql className="h-12 w-12 text-[#E10098]" /> },
    { name: 'Firebase', icon: <SiFirebase className="h-12 w-12 text-[#FFCA28]" /> },
    { name: 'Express', icon: <SiExpress className="h-12 w-12 text-gray-300" /> }
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
    <section className="py-24 bg-custom-dark-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Technologies We Use' : 'Tecnologias Que Utilizamos'}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'We leverage modern and reliable technologies to deliver high-quality solutions.'
              : 'Utilizamos tecnologias modernas e confiáveis para entregar soluções de alta qualidade.'}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techList.map((tech) => (
            <motion.div 
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-custom-dark rounded-lg border border-custom-purple/20 hover:border-custom-purple/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-3">
                {tech.icon}
              </div>
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 