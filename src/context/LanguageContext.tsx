
import { createContext, useContext, useEffect, useState } from "react";
import { content, ContentType, Language } from "../data/content";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ContentType;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang === "en" || savedLang === "pt") {
      return savedLang;
    }
    // Default to browser language or English
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "pt" ? "pt" : "en";
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Get content for current language
  const t = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
