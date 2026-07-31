// lib/language-context.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionaries, Dictionary, Language } from "./dictionaries";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    // Recuperar el idioma guardado al cargar la app
    const storedLang = window.localStorage.getItem("lunbyte.lang") as Language;
    if (storedLang === "es" || storedLang === "en") {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    window.localStorage.setItem("lunbyte.lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};