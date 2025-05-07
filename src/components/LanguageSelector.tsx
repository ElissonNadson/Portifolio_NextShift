import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleLanguage}
      className="text-gray-300 hover:text-custom-purple transition-colors flex items-center gap-1.5 font-medium"
    >
      <Globe size={18} />
      {language === 'en' ? 'ENG' : 'PT BR'}
    </Button>
  );
};

export default LanguageSelector; 