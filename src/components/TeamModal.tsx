import React from 'react';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { useTeamMembers } from '@/lib/TeamMembersContext';
import { useLanguage } from '@/lib/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';

type TeamModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalType: 'github' | 'linkedin' | 'email';
};

const IconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail
};

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, modalType }) => {
  const { members } = useTeamMembers();
  const { language, t } = useLanguage();

  const titles = {
    github: {
      en: 'Our GitHub Profiles',
      pt: 'Nossos Perfis no GitHub'
    },
    linkedin: {
      en: 'Connect with Us on LinkedIn',
      pt: 'Conecte-se Conosco no LinkedIn'
    },
    email: {
      en: 'Contact Our Team via Email',
      pt: 'Entre em Contato com Nossa Equipe via Email'
    }
  };

  const descriptions = {
    github: {
      en: 'Check out our open-source contributions and code repositories.',
      pt: 'Confira nossas contribuições open-source e repositórios de código.'
    },
    linkedin: {
      en: 'Connect with our team members for professional networking.',
      pt: 'Conecte-se com os membros da nossa equipe para networking profissional.'
    },
    email: {
      en: 'Reach out to our team members directly via email.',
      pt: 'Entre em contato diretamente com os membros da nossa equipe por email.'
    }
  };

  const getLink = (member: typeof members[0]) => {
    switch(modalType) {
      case 'github':
        return `https://github.com/${member.github}`;
      case 'linkedin':
        return `https://linkedin.com/in/${member.linkedin}`;
      case 'email':
        return `mailto:${member.email}`;
    }
  };

  const getDisplayValue = (member: typeof members[0]) => {
    switch(modalType) {
      case 'github':
        return `@${member.github}`;
      case 'linkedin':
        return member.linkedin;
      case 'email':
        return member.email;
    }
  };

  const Icon = IconMap[modalType];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-custom-dark text-white border-custom-purple/20">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon className="text-custom-purple" />
            {titles[modalType][language]}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {descriptions[modalType][language]}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-4">
            {members.map((member) => (
              <div key={member.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="font-medium text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role[language]}</p>
                </div>
                <a 
                  href={getLink(member)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-custom-purple hover:text-white transition-colors"
                >
                  <span>{getDisplayValue(member)}</span>
                  <Icon size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X size={16} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal; 