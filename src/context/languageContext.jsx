import { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }) {
  const languages = {
    en: 'English',
    hi: 'Hindi',
    ka: 'Kannada',
  };

  const [language, setLanguage] = useState(languages['en']);

  const changeLanguage = (l) => {
    setLanguage(languages[l]);
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={changeLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}
