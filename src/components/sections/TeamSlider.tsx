import React, { useState } from 'react';
import { useLanguage } from '@/utils/LanguageContext';
import TeamModal from '@/components/modals/TeamModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import Wave from '@/components/ui/Wave';

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

const teamMembersPT: TeamMember[] = [
  {
    id: 'adriel',
    name: 'Adriel Henrique',
    role: 'Desenvolvedor Fullstack',
    bio: 'Sou programador especializado em Ciência de Dados, pipelines ETL e automações RPA com Python, transformando dados brutos em soluções estratégicas. Utilizo Apache Spark e Databricks para processamento distribuído em larga escala, aliando eficiência operacional a análises preditivas. Minha abordagem combina modelagem de dados, Machine Learning e automação inteligente para otimizar workflows e gerar insights valiosos.',
    image: '/projects/fotos/Adriel.png',
    skills: ['SQL', 'C', 'TypeScript', 'Python', 'JvaScript', 'Java', 'Ruby', 'Git', 'Next.js', 'Apache Spark', 'React', 'TailwindCSS', 'Bootstrap', 'Machine Learning'],
    links: {
      github: 'https://github.com/YGerard324',
      linkedin: 'https://linkedin.com/in/adriel-henrique-a20601225',
      whatsapp: 'https://wa.me/5575991707880'
    }
  },
  {
    id: 'jose',
    name: 'José Henrique',
    role: 'Desenvolvedor Backend',
    bio: 'Estudante de Desenvolvimento de Sistemas. Comecei minha jornada profissional aos 14 anos em atendimento ao cliente. Após um curso de Design na Gracom e experiência como designer na Decorart, enfrentei a pandemia em 2020, quando me tornei assistente de TI na Suporte Informática. Atualmente, estou aprimorando minhas habilidades em Desenvolvimento de Sistemas no Senai, buscando contribuir no campo da tecnologia e inovação.',
    image: '/projects/fotos/Jose.png',
    skills: ['SQL', 'Java', 'Python', 'PostgreSQL', 'C', 'C++', 'SQLite','Node.js', 'Git','Next.js', 'Express.js', 'Spring Boot', 'Postman'],
    links: {
      github: 'https://github.com/josehlopes',
      linkedin: 'https://linkedin.com/in/josé-henrique-silva-lopes-826981208',
      whatsapp: 'https://wa.me/5575981062372'
    }
  },
  {
    id: 'nadson',
    name: 'Elisson Nadson',
    role: 'Desenvolvedor Frontend',
    bio: 'Iniciei minha trajetória profissional aos 14 anos, conciliando trabalho e estudo para adquirir diversas habilidades. Trabalhei na MDK Provedor, onde aprendi uma profissão e abri meu próprio provedor de internet, e atualmente atuo na Fastnet Informática com instalação e manutenção de sistemas, segurança por câmeras e reparo de computadores. Apesar de pausas nos estudos em Eletrotécnica e Matemática, conclui o curso técnico em informática no IETAAM, estudo Desenvolvimento de Sistemas no SENAI e iniciei Engenharia de Software na Pitágoras. Também tive experiência temporária no IBGE e agora busco oportunidades na programação, determinado a realizar meu sonho de ser um grande programador.',
    image: '/projects/fotos/Nadson.png',
    skills: ['Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Docker', 'React', 'Next.js', 'Express.js', 'AWS', 'Google Cloud', 'Bootstrap', 'Figma', 'C'],
    links: {
      github: 'https://github.com/ElissonNadson',
      linkedin: 'https://linkedin.com/in/elissonmarques',
      whatsapp: 'https://wa.me/5575991641174'
    }
  },
  {
    id: 'samuel',
    name: 'Samuel',
    role: 'Desenvolvedor Frontend',
    bio: 'Desenvolvedor de Software experiente, com especialização em Python para automação e criação de aplicações robustas. Possui habilidades em HTML & CSS, PHP, JavaScript e TypeScript, desenvolvendo interfaces web dinâmicas e responsivas. Proficiente em SQL/MySQL para gerenciamento de banco de dados. Experiência com Git e GitHub Actions para controle de versão e fluxos de trabalho CI/CD. Forte conhecimento em UI/UX com Figma, aplicando princípios de usabilidade e design. Familiarizado com Java e C#, sempre disposto a aprender e se adaptar. Atua bem tanto de forma independente quanto em equipe, solucionando problemas com inovação e boas práticas.',
    image: '/projects/fotos/Samuel.jpg',
    skills: ['React Native', 'TypeScript', 'Mobile UI', 'API Integration', 'Redux', 'Git', 'Expo', 'React', 'TailwindCSS', 'Bootstrap', 'Figma', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Next.js', 'C'],
    links: {
      github: 'https://github.com/Sjr0405',
      linkedin: 'https://linkedin.com/in/samuel-junior-0415b8299',
      whatsapp: 'https://wa.me/5575999970922'
    }
  },
  {
    id: 'thiago',
    name: 'Thiago Andrade',
    role: 'Desenvolvedor Backend',
    bio: 'Meu nome é Thiago de Andrade Barros Machado, tenho 22 anos e sou Desenvolvedor Backend Java com Spring Boot. Tenho experiência em APIs REST e gestão de bancos de dados relacionais (PostgreSQL, MySQL), aplicando Clean Code, SOLID e Clean Architecture. Aplico metodologias ágeis (Scrum, Kanban) e Git Flow para garantir entregas escaláveis e de alta qualidade. Também atuo com Python, C, HTML/CSS e sistemas embarcados, com foco em IoT e microcontroladores. Sou bacharelando em Engenharia de Computação pela UNIFAN (2021–2025) e técnico em Desenvolvimento de Sistemas pelo SENAI.',
    image: '/projects/fotos/Thiago.png',
    skills: ['SQL', 'Java', 'Python', 'PostgreSQL', 'C', 'SQLite','Node.js', 'Git','Next.js', 'Express.js', 'Spring Boot', 'Postman'],
    links: {
      github: 'https://github.com/ThiagoMachado2',
      linkedin: 'https://linkedin.com/in/thiago-machado-20658b32a',
      whatsapp: 'https://wa.me/5575992136288'
    }
  }
];

const teamMembersEN: TeamMember[] = [
  {
    id: 'adriel',
    name: 'Adriel Henrique',
    role: 'Fullstack Developer',
    bio: 'I am a programmer specialized in Data Science, ETL pipelines, and RPA automation using Python, turning raw data into strategic solutions. I use Apache Spark and Databricks for large-scale distributed processing, combining operational efficiency with predictive analytics. My approach merges data modeling, Machine Learning, and intelligent automation to optimize workflows and generate valuable insights.',
    image: '/projects/fotos/Adriel.png',
    skills: ['SQL', 'C', 'TypeScript', 'Python', 'JvaScript', 'Java', 'Ruby', 'Git', 'Next.js', 'Apache Spark', 'React', 'TailwindCSS', 'Bootstrap', 'Machine Learning'],
    links: {
      github: 'https://github.com/YGerard324',
      linkedin: 'https://linkedin.com/in/adriel-henrique-a20601225',
      whatsapp: 'https://wa.me/5575991707880'
    }
  },
  {
    id: 'jose',
    name: 'José Henrique',
    role: 'Backend Developer',
    bio: 'System Development student. I started my professional journey at 14 in customer service. After a Design course at Gracom and experience as a designer at Decorart, I faced the pandemic in 2020 and became an IT assistant at Suporte Informática. Currently, I am enhancing my skills in System Development at Senai, aiming to contribute to the field of technology and innovation.',
    image: '/projects/fotos/Jose.png',
    skills: ['SQL', 'Java', 'Python', 'PostgreSQL', 'C', 'C++', 'SQLite','Node.js', 'Git','Next.js', 'Express.js', 'Spring Boot', 'Postman'],
    links: {
      github: 'https://github.com/josehlopes',
      linkedin: 'https://linkedin.com/in/josé-henrique-silva-lopes-826981208',
      whatsapp: 'https://wa.me/5575981062372'
    }
  },
  {
    id: 'nadson',
    name: 'Elisson Nadson',
    role: 'Frontend Developer',
    bio: 'I began my professional journey at 14, balancing work and study to acquire various skills. I worked at MDK Provedor, where I learned a trade and opened my own internet provider. Currently, I work at Fastnet Informática with system installation and maintenance, camera security, and computer repair. Despite pauses in my studies in Electrotechnics and Mathematics, I completed a technical course in IT at IETAAM, study Systems Development at SENAI, and started Software Engineering at Pitágoras. I also had temporary experience at IBGE and now seek programming opportunities, determined to achieve my dream of becoming a great developer.',
    image: '/projects/fotos/Nadson.png',
    skills: ['Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Docker', 'React', 'Next.js', 'Express.js', 'AWS', 'Google Cloud', 'Bootstrap', 'Figma', 'C'],
    links: {
      github: 'https://github.com/ElissonNadson',
      linkedin: 'https://linkedin.com/in/elissonmarques',
      whatsapp: 'https://wa.me/5575991641174'
    }
  },
  {
    id: 'samuel',
    name: 'Samuel',
    role: 'Frontend Developer',
    bio: 'Experienced Software Developer with a specialization in Python for automation and building robust applications. Skilled in HTML & CSS, PHP, JavaScript, and TypeScript, developing dynamic and responsive web interfaces. Proficient in SQL/MySQL for database management. Experienced with Git and GitHub Actions for version control and CI/CD workflows. Strong UI/UX knowledge with Figma, applying usability and design principles. Familiar with Java and C#, always eager to learn and adapt. Performs well both independently and in teams, solving problems with innovation and best practices.',
    image: '/projects/fotos/Samuel.jpg',
    skills: ['React Native', 'TypeScript', 'Mobile UI', 'API Integration', 'Redux', 'Git', 'Expo', 'React', 'TailwindCSS', 'Bootstrap', 'Figma', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Next.js', 'C'],
    links: {
      github: 'https://github.com/Sjr0405',
      linkedin: 'https://linkedin.com/in/samuel-junior-0415b8299',
      whatsapp: 'https://wa.me/5575999970922'
    }
  },
  {
    id: 'thiago',
    name: 'Thiago Andrade',
    role: 'Backend Developer',
    bio: 'My name is Thiago de Andrade Barros Machado, I’m 22 years old, and I’m a Backend Java Developer with Spring Boot. I have experience with REST APIs and relational database management (PostgreSQL, MySQL), applying Clean Code, SOLID principles, and Clean Architecture. I use agile methodologies (Scrum, Kanban) and Git Flow to ensure scalable and high-quality deliveries. I also work with Python, C, HTML/CSS, and embedded systems, focusing on IoT and microcontrollers. I am pursuing a degree in Computer Engineering at UNIFAN (2021–2025) and a technical degree in System Development at SENAI.',
    image: '/projects/fotos/Thiago.png',
    skills: ['SQL', 'Java', 'Python', 'PostgreSQL', 'C', 'SQLite','Node.js', 'Git','Next.js', 'Express.js', 'Spring Boot', 'Postman'],
    links: {
      github: 'https://github.com/ThiagoMachado2',
      linkedin: 'https://linkedin.com/in/thiago-machado-20658b32a',
      whatsapp: 'https://wa.me/5575992136288'
    }
  }
];

const TeamSlider: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const currentTeam = language === 'en' ? teamMembersEN : teamMembersPT;

  return (
    <section id="team" className="py-20  relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('team.title')}
        </h2>
        <p className="text-gray-400 text-center mx-auto mb-12">
          {t('team.subtitle')}
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {currentTeam.map((member) => (
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