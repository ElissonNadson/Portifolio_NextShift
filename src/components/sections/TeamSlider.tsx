import React, { useState } from 'react';
import { useLanguage } from '@/utils/LanguageContext';
import TeamModal from '@/components/modals/TeamModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

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

const teamMembers: TeamMember[] = [
  {
    id: 'adriel',
    name: 'Adriel Henrique',
    role: 'Desenvolvedor Frontend',
    bio: 'Especialista em React e NextJS, focado em criar interfaces modernas e responsivas com excelente experiência do usuário.',
    image: '/projects/fotos/Adriel.png',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    links: {
      github: 'https://github.com/adriel',
      linkedin: 'https://linkedin.com/in/adriel',
      whatsapp: 'https://wa.me/5575991707880'
    }
  },
  {
    id: 'jose',
    name: 'José Henrique',
    role: 'Desenvolvedor Backend',
    bio: 'Especialista em arquiteturas escaláveis com Node.js e bancos de dados. Experiência em APIs RESTful e integração de sistemas.',
    image: '/projects/fotos/Jose.png',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Microservices'],
    links: {
      github: 'https://github.com/jose',
      linkedin: 'https://linkedin.com/in/jose',
      whatsapp: 'https://wa.me/5575981062372'
    }
  },
  {
    id: 'nadson',
    name: 'Elisson Nadson',
    role: 'DevOps Engineer',
    bio: 'Especialista em infraestrutura em nuvem e CI/CD, automatizando processos de deploy e garantindo escalabilidade e segurança.',
    image: '/projects/fotos/Nadson.png',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
    links: {
      github: 'https://github.com/nadson',
      linkedin: 'https://linkedin.com/in/nadson',
      whatsapp: 'https://wa.me/5575991641174'
    }
  },
  {
    id: 'samuel',
    name: 'Samuel',
    role: 'Mobile Developer',
    bio: 'Especialista em desenvolvimento de aplicações mobile com React Native, entregando experiências nativas de alta qualidade.',
    image: '/projects/fotos/Samuel.png',
    skills: ['React Native', 'TypeScript', 'Mobile UI', 'API Integration', 'Redux'],
    links: {
      github: 'https://github.com/samuel',
      linkedin: 'https://linkedin.com/in/samuel',
      whatsapp: 'https://wa.me/5575999970922'
    }
  },
  {
    id: 'thiago',
    name: 'Thiago Andrade',
    role: 'UI/UX Designer',
    bio: 'Especialista em criar experiências de usuário intuitivas e interfaces visualmente atraentes, sempre focando na usabilidade.',
    image: '/projects/fotos/Thiago.png',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    links: {
      github: 'https://github.com/thiago',
      linkedin: 'https://linkedin.com/in/thiago',
      whatsapp: 'https://wa.me/5575992136288'
    }
  }
];

const TeamSlider: React.FC = () => {
  const { language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="team" className="py-20 bg-custom-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? 'Our Team' : 'Nossa Equipe'}
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] pl-4">
                  <div 
                    className="team-member-card p-4"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="member-image-container h-64 w-64 md:h-80 md:w-80 mx-auto rounded-full overflow-hidden border-4 border-custom-purple/50 cursor-pointer hover:border-custom-purple transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-4 text-center">{member.name}</h3>
                    <p className="text-custom-purple text-center">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-custom-purple/20 hover:bg-custom-purple/30 text-white"
              onClick={scrollPrev}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-custom-purple/20 hover:bg-custom-purple/30 text-white"
              onClick={scrollNext}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>

      {selectedMember && (
        <TeamModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      )}

      <style>{`
        .team-member-card {
          transition: transform 0.3s ease;
        }
        
        .team-member-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default TeamSlider; 