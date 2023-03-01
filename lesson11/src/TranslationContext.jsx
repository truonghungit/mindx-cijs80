import { createContext, useContext, useState } from "react";

export const TranslationContext = createContext({ currentLanguage: "vi" });

export const TranslationProvider = ({ children, value }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <TranslationContext.Provider
      value={{ currentLanguage, setCurrentLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
