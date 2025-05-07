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
      name: "Thiago Machado",
      role: {
        en: "Developer",
        pt: "Desenvolvedor"
      },
      github: "ThiagoMachado2",
      linkedin: "thiago-machado-20658b32a",
      email: "thiago.a.machado002@gmail.com"
    },
    {
      name: "José Henrique Lopes",
      role: {
        en: "Developer",
        pt: "Desenvolvedor"
      },
      github: "josehlopes",
      linkedin: "josé-henrique-silva-lopes-826981208",
      email: "josehlopes.s2002@gmail.com"
    },
    {
      name: "Elisson Marques",
      role: {
        en: "Developer",
        pt: "Desenvolvedor"
      },
      github: "ElissonNadson",
      linkedin: "elissonmarques",
      email: "nadsonnodachi@gmail.com"
    },
    {
      name: "Samuel Junior",
      role: {
        en: "Developer",
        pt: "Desenvolvedor"
      },
      github: "Sjr0405",
      linkedin: "samuel-junior-0415b8299",
      email: "samueljunior.santos@gmail.com"
    },
    {
      name: "Adriel Henrique",
      role: {
        en: "Developer",
        pt: "Desenvolvedor"
      },
      github: "YGerard324",
      linkedin: "adriel-henrique-a20601225",
      email: "adriel@gmail.com"
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