import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import ProjectModal, { ProjectDetails } from './ProjectModal';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const projectsData: ProjectDetails[] = [
    {
      id: 'Quack',
      title: t('projects.Quack.title'),
      description: t('projects.Quack.description'),
      images: [
        {
          url: '/src/assets/Quack.png',
          alt: 'Quack Sing up page'
        },
        {
          url: '/src/assets/Quack2.png',
          alt: 'Quack Home page'
        },
        {
          url: '/src/assets/Quack3.png',
          alt: 'Quack Landing page'
        },
        {
          url: '/src/assets/Quack4.png',
          alt: 'Quack Profile page'
        }
      ],
      tags: ['React', 'Node.js', 'JavaScript', 'Java'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/ecommerce'
    },
    {
      id: 'SusSenai',
      title: t('projects.SusSenai.title'),
      description: t('projects.SusSenai.description'),
      images: [
        {
          url: '/src/assets/SusSenai.png',
          alt: 'Health app dashboard'
        },
        {
          url: '/src/assets/SusSenai2.png',
          alt: 'Health metrics tracking'
        },
        {
          url: '/src/assets/SusSenai3.png',
          alt: 'Appointment scheduling interface'
        },
        {
          url: '/src/assets/SusSenai4.png',
          alt: 'Health app landing page'
        }
      ],
      tags: ['React Native', 'Firebase', 'GraphQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/health-app'
    },
    {
      id: 'ParkPass',
      title: t('projects.ParkPass.title'),
      description: t('projects.ParkPass.description'),
      images: [
        {
          url: '/src/assets/ParkPass6.png',
          alt: 'ParkPass dashboard'
        },
        {
          url: '/src/assets/ParkPass.png',
          alt: 'Traffic monitoring system'
        },
        {
          url: '/src/assets/ParkPass2.png',
          alt: 'City utilities management'
        },
        {
          url: '/src/assets/ParkPass3.png',
          alt: 'ParkPass landing page'
        },
        {
          url: '/src/assets/ParkPass4.png',
          alt: 'ParkPass login page'
        },
        {
          url: '/src/assets/ParkPass5.png',
          alt: 'ParkPass sign up page'
        }
      ],
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/smart-city'
    },
    {
      id: 'ThigasSalon',
      title: t('projects.ThigasSalon.title'),
      description: t('projects.ThigasSalon.description'),
      images: [
        {
          url: '/src/assets/ThigasSalon.png',
          alt: 'ThigasSalon tracking dashboard'
        },
        {
          url: '/src/assets/ThigasSalon2.png',
          alt: 'ThigasSalon tracking map'
        },
        {
          url: '/src/assets/ThigasSalon3.png',
          alt: 'ThigasSalon verification interface'
        }
      ],
      tags: ['React', 'Python', 'Blockchain', 'AWS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/supply-chain'
    },
    {
      id: 'EcoTrack',
      title: t('projects.EcoTrack.title'),
      description: t('projects.EcoTrack.description'),
      images: [
        {
          url: '/src/assets/EcoTrack.png',
          alt: 'EcoTrack dashboard'
        },
        {
          url: '/src/assets/EcoTrack2.png',
          alt: 'EcoTrack course interface'
        },
        {
          url: '/src/assets/EcoTrack3.png',
          alt: 'EcoTrack tracking analytics'
        },
        {
          url: '/src/assets/EcoTrack4.png',
          alt: 'EcoTrack landing page'
        }
      ],
      tags: ['Angular', 'Java', 'MySQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/education-platform'
    },
    {
      id: 'AgriSense',
      title: t('projects.AgriSense.title'),
      description: t('projects.AgriSense.description'),
      images: [
        {
          url: '/src/assets/AgriSense.png',
          alt: 'AgriSense analytics dashboard'
        },
        {
          url: '/src/assets/AgriSense2.png',
          alt: 'AgriSense management'
        },
        {
          url: '/src/assets/AgriSense3.png',
          alt: 'AgriSense AI visualization'
        },
        {
          url: '/src/assets/AgriSense4.png',
          alt: 'AgriSense landing page'
        }
      ],
      tags: ['Next.js', 'TensorFlow', 'Python', 'D3.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/finance-analytics'
    },
  ];

  const openProjectModal = (project: ProjectDetails) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-custom-dark">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          >
            {t('projects.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-custom-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-custom-purple/20 text-custom-purple rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-custom-purple/10 text-custom-purple/80 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <button
                    className="text-custom-purple hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{t('projects.viewDetails')}</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default Projects;