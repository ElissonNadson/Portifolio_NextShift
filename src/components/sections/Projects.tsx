import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/utils/LanguageContext';
import ProjectModal from '@/components/modals/ProjectModal';
import type { ProjectDetails, ProjectImage } from '@/components/modals/ProjectModal';

const projectsData: ProjectDetails[] = [
  {
    id: 'Quack',
    title: 'Quack ()',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/quack/Quack.png', alt: 'Quack landing page' },
      { url: '/projects/quack/Quack2.png', alt: 'Quack dashboard' },
      { url: '/projects/quack/Quack3.png', alt: 'Quack learning path' },
      { url: '/projects/quack/Quack4.png', alt: 'Quack features' },
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Styled Components'],
    githubUrl: 'https://github.com/nextshift/quack',
    liveUrl: 'https://quack.dev',
  },
  {
    id: 'SusSenai',
    title: 'Sus Sem Fila',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/sus-sem-fila/SusSenai.png', alt: 'SUS Sem Fila landing page' },
      { url: '/projects/sus-sem-fila/SusSenai2.png', alt: 'SUS Sem Fila appointment page' },
      { url: '/projects/sus-sem-fila/SusSenai3.png', alt: 'SUS Sem Fila mobile view' },
      { url: '/projects/sus-sem-fila/SusSenai4.png', alt: 'SUS Sem Fila features' },
    ],
    tags: ['React Native', 'Expo', 'Firebase', 'Google Maps API', 'Redux'],
    githubUrl: 'https://github.com/nextshift/sus-sem-fila',
    liveUrl: 'https://play.google.com/store/apps/sus-sem-fila',
  },
  {
    id: 'ParkPass',
    title: 'ParkPass',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/parkpass/ParkPass.png', alt: 'ParkPass mobile app' },
      { url: '/projects/parkpass/ParkPass2.png', alt: 'ParkPass dashboard' },
      { url: '/projects/parkpass/ParkPass3.png', alt: 'ParkPass parking spot' },
      { url: '/projects/parkpass/ParkPass4.png', alt: 'ParkPass features' },
    ],
    tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/nextshift/parkpass',
    liveUrl: 'https://parkpass.app',
  },
  {
    id: 'ThigasSalon',
    title: 'Thigas Pet Salon',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/thigas-salon/ThigasSalon.png', alt: 'Thigas Pet Salon booking' },
      { url: '/projects/thigas-salon/ThigasSalon2.png', alt: 'Thigas Pet Salon services' },
      { url: '/projects/thigas-salon/ThigasSalon3.png', alt: 'Thigas Pet Salon admin panel' },
    ],
    tags: ['React', 'Next.js', 'MongoDB', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/nextshift/thigas-salon',
    liveUrl: 'https://thigas-pet-salon.vercel.app',
  },
  {
    id: 'EcoTrack',
    title: 'EcoTrack',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/ecotrack/EcoTrack.png', alt: 'EcoTrack dashboard' },
      { url: '/projects/ecotrack/EcoTrack2.png', alt: 'EcoTrack carbon tracking' },
      { url: '/projects/ecotrack/EcoTrack3.png', alt: 'EcoTrack achievements' },
      { url: '/projects/ecotrack/EcoTrack4.png', alt: 'EcoTrack features' },
    ],
    tags: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'D3.js'],
    githubUrl: 'https://github.com/nextshift/ecotrack',
    liveUrl: 'https://ecotrack.earth',
  },
  {
    id: 'AgriSense',
    title: 'AgriSense',
    description: '', // Will be populated from translations
    images: [
      { url: '/projects/agrisense/AgriSense.png', alt: 'AgriSense dashboard' },
      { url: '/projects/agrisense/AgriSense2.png', alt: 'AgriSense monitoring' },
      { url: '/projects/agrisense/AgriSense3.png', alt: 'AgriSense mobile view' },
      { url: '/projects/agrisense/AgriSense4.png', alt: 'AgriSense features' },
    ],
    tags: ['React', 'IoT', 'Python', 'TensorFlow', 'AWS IoT'],
    githubUrl: 'https://github.com/nextshift/agrisense',
    liveUrl: 'https://agrisense.farm',
  },
];

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  // Add translations to project descriptions
  const projectsWithTranslations = projectsData.map(project => ({
    ...project,
    title: t(`projects.${project.id}.title`) || project.title,
    description: t(`projects.${project.id}.description`)
  }));

  return (
    <section id="projects" className="py-24 bg-custom-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsWithTranslations.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-custom-dark-light rounded-xl overflow-hidden border border-custom-purple/10 hover:border-custom-purple/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.images[0].url}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag}
                      className="text-xs font-medium bg-custom-purple/10 text-custom-purple px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-gray-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <button
                  className="text-custom-purple hover:text-white transition-colors font-medium flex items-center"
                  onClick={() => setSelectedProject(project)}
                >
                  {t('projects.viewDetails')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects; 