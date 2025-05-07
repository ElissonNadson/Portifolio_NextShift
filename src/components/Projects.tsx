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
      id: 'ecommerce',
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'E-commerce dashboard showing product listings'
        },
        {
          url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'E-commerce shopping cart'
        },
        {
          url: 'https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'E-commerce payment processing'
        }
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/ecommerce'
    },
    {
      id: 'health',
      title: t('projects.health.title'),
      description: t('projects.health.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Health app dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Health metrics tracking'
        },
        {
          url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Appointment scheduling interface'
        }
      ],
      tags: ['React Native', 'Firebase', 'GraphQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/health-app'
    },
    {
      id: 'smartcity',
      title: t('projects.smartcity.title'),
      description: t('projects.smartcity.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1515630771457-09367d0ae038?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Smart city dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1573979429769-bd49eb370752?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Traffic monitoring system'
        },
        {
          url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'City utilities management'
        }
      ],
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/smart-city'
    },
    {
      id: 'supplychain',
      title: t('projects.supplychain.title'),
      description: t('projects.supplychain.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Supply chain tracking dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Logistics tracking map'
        },
        {
          url: 'https://images.unsplash.com/photo-1570449942806-3a5402621f49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Blockchain verification interface'
        }
      ],
      tags: ['React', 'Python', 'Blockchain', 'AWS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/supply-chain'
    },
    {
      id: 'education',
      title: t('projects.education.title'),
      description: t('projects.education.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Educational platform dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Online course interface'
        },
        {
          url: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Progress tracking analytics'
        }
      ],
      tags: ['Angular', 'Java', 'MySQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: 'https://github.com/NextShift/education-platform'
    },
    {
      id: 'finance',
      title: t('projects.finance.title'),
      description: t('projects.finance.description'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Financial analytics dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Investment portfolio management'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
          alt: 'Predictive AI visualization'
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