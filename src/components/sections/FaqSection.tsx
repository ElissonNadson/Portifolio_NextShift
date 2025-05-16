import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/utils/LanguageContext';
import Wave from '@/components/ui/Wave';

const faqsPt = [
  {
    question: 'Quais serviços a Next Shift oferece?',
    answer: 'Desenvolvimento web, mobile, soluções em nuvem, UI/UX, automação e consultoria tecnológica.'
  },
  {
    question: 'Como posso entrar em contato com a equipe?',
    answer: 'Você pode nos contatar pelo WhatsApp, e-mail ou pelo formulário na seção de contato.'
  },
  {
    question: 'Vocês trabalham com projetos de qualquer porte?',
    answer: 'Sim! Atendemos desde pequenas empresas até grandes corporações, adaptando soluções para cada necessidade.'
  },
  {
    question: 'Qual o prazo médio para entrega de um projeto?',
    answer: 'O prazo depende da complexidade do projeto, mas sempre buscamos entregar com agilidade e qualidade.'
  },
];

const faqsEn = [
  {
    question: 'What services does Next Shift offer?',
    answer: 'Web development, mobile, cloud solutions, UI/UX, automation and technological consultancy.'
  },
  {
    question: 'How can I contact the team?',
    answer: 'You can contact us via WhatsApp, email, or the contact form on the contact section.'
  },
  {
    question: 'Do you work on projects of any size?',
    answer: 'Yes! We can adapt solutions to meet the needs of small businesses to large corporations.'
  },
  {
    question: 'What is the average delivery time for a project?',
    answer: 'The delivery time depends on the complexity of the project, but we always strive for quick and quality delivery.'
  },
]

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const { t, language } = useLanguage();
  const faqs = language === 'en' ? faqsEn : faqsPt;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#2d145d] relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-custom-dark rounded-lg shadow p-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-medium text-custom-purple focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <ChevronDown
                  className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  size={22}
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 mt-2' : 'max-h-0'}`}
                aria-hidden={openIndex !== idx}
              >
                <p className="text-gray-300 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 