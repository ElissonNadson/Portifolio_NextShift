import React from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/utils/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export type ProjectImage = {
  url: string;
  alt: string;
};

export type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-custom-dark text-white border-custom-purple/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        
        {/* Image carousel */}
        <div className="relative w-full h-80 mt-4 bg-black/20 rounded-lg overflow-hidden">
          <img 
            src={project.images[currentImageIndex].url} 
            alt={project.images[currentImageIndex].alt}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation arrows */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-black/30 hover:bg-black/50 text-white rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-black/30 hover:bg-black/50 text-white rounded-full"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
          
          {/* Image pagination indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-custom-purple' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Project description */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-300">
            {language === 'en' ? 'Description' : 'Descrição'}
          </h3>
          <p className="mt-2 text-gray-400">{project.description}</p>
        </div>
        
        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-300">
            {language === 'en' ? 'Technologies' : 'Tecnologias'}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-custom-purple/20 text-custom-purple hover:bg-custom-purple/30">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-purple hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
              <span>{language === 'en' ? 'Live Demo' : 'Demonstração'}</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-purple hover:text-white transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}
        </div>
        
        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X size={18} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 