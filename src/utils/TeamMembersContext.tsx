import React, { createContext, useContext } from 'react';
import { useLanguage } from './LanguageContext';

export type TeamMember = {
  name: string;
  avatar?: string;
  role: {
    en: string;
    pt: string;
  };
  github: string;
  linkedin: string;
  email: string;
  whatsapp?: string;
};

type TeamContextType = {
  members: TeamMember[];
};

const TeamMembersContext = createContext<TeamContextType | undefined>(undefined);

export const TeamMembersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const members: TeamMember[] = [
    {
      name: "Thiago Machado",
      avatar: "/projects/fotos/Thiago.png",
      role: { en: "Backend Developer", pt: "Desenvolvedor Backend" },
      github: "ThiagoMachado2",
      linkedin: "thiago-machado-20658b32a",
      email: "thiago.a.machado002@gmail.com",
      whatsapp: "https://wa.me/5575992136288"
    },
    {
      name: "José Henrique Lopes",
      avatar: "/projects/fotos/Jose.png",
      role: { en: "Backend Developer", pt: "Desenvolvedor Backend" },
      github: "josehlopes",
      linkedin: "josé-henrique-silva-lopes-826981208",
      email: "josehlopes.s2002@gmail.com",
      whatsapp: "https://wa.me/5575981062372"
    },
    {
      name: "Elisson Nadson",
      avatar: "/projects/fotos/Nadson.png",
      role: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
      github: "ElissonNadson",
      linkedin: "elissonmarques",
      email: "nadsonnodachi@gmail.com",
      whatsapp: "https://wa.me/5575991641174"
    },
    {
      name: "Samuel Junior",
      avatar: "/projects/fotos/Samuel.jpg",
      role: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
      github: "Sjr0405",
      linkedin: "samuel-junior-0415b8299",
      email: "samueljunior.santos@gmail.com",
      whatsapp: "https://wa.me/5575999970922"
    },
    {
      name: "Adriel Henrique",
      avatar: "/projects/fotos/Adriel.png",
      role: { en: "Fullstack Developer", pt: "Desenvolvedor Fullstack" },
      github: "YGerard324",
      linkedin: "adriel-henrique-a20601225",
      email: "adrielfsa1@gmail.com",
      whatsapp: "https://wa.me/5575991707880"
    }
  ];

  return (
    <TeamMembersContext.Provider value={{ members }}>
      {children}
    </TeamMembersContext.Provider>
  );
};

export const useTeamMembers = (): TeamContextType => {
  const context = useContext(TeamMembersContext);
  if (context === undefined) {
    throw new Error('useTeamMembers must be used within a TeamMembersProvider');
  }
  return context;
}; 