import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'ecommerce',
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 'health',
      title: t('projects.health.title'),
      description: t('projects.health.description'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['React Native', 'Firebase', 'GraphQL']
    },
    {
      id: 'smartcity',
      title: t('projects.smartcity.title'),
      description: t('projects.smartcity.description'),
      image: 'https://images.unsplash.com/photo-1515630771457-09367d0ae038?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js']
    },
    {
      id: 'supplychain',
      title: t('projects.supplychain.title'),
      description: t('projects.supplychain.description'),
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['React', 'Python', 'Blockchain', 'AWS']
    },
    {
      id: 'education',
      title: t('projects.education.title'),
      description: t('projects.education.description'),
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['Angular', 'Java', 'MySQL', 'WebRTC']
    },
    {
      id: 'finance',
      title: t('projects.finance.title'),
      description: t('projects.finance.description'),
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80',
      link: '#',
      tags: ['Next.js', 'TensorFlow', 'Python', 'D3.js']
    },
  ];

  return (
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-custom-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-custom-purple/20 text-custom-purple rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-purple hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>{t('projects.viewDetails')}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;