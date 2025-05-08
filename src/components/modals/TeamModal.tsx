import React from 'react';
import { X, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/utils/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  links: {
    github?: string;
    linkedin?: string;
    whatsapp?: string;
  };
};

type TeamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember;
};

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, member }) => {
  const { language } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl bg-custom-dark text-white border-custom-purple/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{member.name}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Profile image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-r from-custom-purple/80 to-blue-700/80 flex-shrink-0">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Member details */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-custom-purple mb-1">{member.role}</h3>
            
            {/* Bio */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-300">
                {language === 'en' ? 'About' : 'Sobre'}
              </h4>
              <p className="mt-2 text-gray-400">{member.bio}</p>
            </div>
            
            {/* Skills */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-300">
                {language === 'en' ? 'Skills' : 'Habilidades'}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} className="bg-custom-purple/20 text-custom-purple hover:bg-custom-purple/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {member.links.github && (
                <a 
                  href={member.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-lg shadow-gray-800/30"
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </a>
              )}
              
              {member.links.linkedin && (
                <a 
                  href={member.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              )}
              
              {member.links.whatsapp && (
                <a 
                  href={member.links.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
                  aria-label={`Contato WhatsApp de ${member.name}`}
                >
                  <FaWhatsapp size={18} className="mr-2" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
        
        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal; 