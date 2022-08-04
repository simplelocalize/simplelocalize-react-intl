import React from 'react';


interface LanguageContextInterface {
  changeLanguage: (language: string) => void;
  language: string;
}

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: '',
  changeLanguage: () => {
    console.warn('LanguageContext.changeLanguage not implemented');
  },
});

export default LanguageContext;
