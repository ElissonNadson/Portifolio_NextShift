import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useTeamMembers } from '@/utils/TeamMembersContext';
import { useLanguage } from '@/utils/LanguageContext';

interface TeamLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamLinksModal: React.FC<TeamLinksModalProps> = ({ isOpen, onClose }) => {
  const { members } = useTeamMembers();
  const { language } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl bg-custom-dark text-white border-custom-purple/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-custom-purple mb-2">Nossa Equipe</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {members.map((member) => (
            <div key={member.name} className="flex items-center gap-4 bg-custom-dark-light rounded-lg p-4 shadow border border-custom-purple/10">
              <img
                src={member.avatar || '/src/assets/images/placeholder.svg'}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-custom-purple"
              />
              <div className="flex-1">
                <div className="font-semibold text-lg text-custom-purple">{member.name}</div>
                <div className="text-gray-400 text-sm mb-2">{member.role[language] || member.role.pt}</div>
                <div className="flex gap-3 mt-1">
                  <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-custom-purple transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-custom-purple transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} aria-label="Email" className="text-gray-300 hover:text-custom-purple transition-colors">
                    <FaEnvelope size={20} />
                  </a>
                  {member.whatsapp && (
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-green-500 transition-colors">
                      <FaWhatsapp size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <DialogClose className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <span className="sr-only">Fechar</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default TeamLinksModal; 