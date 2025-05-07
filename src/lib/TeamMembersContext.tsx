import React, { createContext, useContext } from 'react';
import { useLanguage } from './LanguageContext';

type TeamMember = {
  name: string;
  role: {
    en: string;
    pt: string;
  };
  github: string;
  linkedin: string;
  email: string;
};

type TeamContextType = {
  members: TeamMember[];
};

const TeamMembersContext = createContext<TeamContextType | undefined>(undefined);

export const TeamMembersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const members: TeamMember[] = [
    {
      name: "Ana Silva",
      role: {
        en: "Frontend Developer",
        pt: "Desenvolvedora Frontend"
      },
      github: "anasilva",
      linkedin: "ana-silva-dev",
      email: "ana.silva@nextshift.com"
    },
    {
      name: "Carlos Oliveira",
      role: {
        en: "Backend Developer",
        pt: "Desenvolvedor Backend"
      },
      github: "carlosoliveira",
      linkedin: "carlos-oliveira-dev",
      email: "carlos.oliveira@nextshift.com"
    },
    {
      name: "Mariana Santos",
      role: {
        en: "UI/UX Designer",
        pt: "Designer de UI/UX"
      },
      github: "marianasantos",
      linkedin: "mariana-santos-design",
      email: "mariana.santos@nextshift.com"
    },
    {
      name: "Pedro Costa",
      role: {
        en: "Project Manager",
        pt: "Gerente de Projetos"
      },
      github: "pedrocosta",
      linkedin: "pedro-costa-pm",
      email: "pedro.costa@nextshift.com"
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