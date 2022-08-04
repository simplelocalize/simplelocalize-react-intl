import React from "react";
import {IntlProvider, MessageFormatElement} from 'react-intl'
import LanguageContext from "./LanguageContext";

const PROJECT_TOKEN = "5e13e3019cff4dc6abe36009445f0883";
const BASE_URL = "https://cdn.simplelocalize.io";
const ENVIRONMENT = "_latest"; // or "_production"
const DEFAULT_LANGUAGE = "en"; // comes from SimpleLocalize language key

const SimpleLocalize = ({children}: { children: React.ReactNode }) => {
  const [messages, setMessages] = React.useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>({});
  const [language, setLanguage] = React.useState<string>(DEFAULT_LANGUAGE);

  const fetchTranslationMessages = (language: string): void => {
    const messages = `${BASE_URL}/${PROJECT_TOKEN}/${ENVIRONMENT}/${language}`;
    fetch(messages)
      .then((data) => data.json())
      .then((messages) => setMessages(messages));
  };

  React.useEffect(() => fetchTranslationMessages(language), [language]);

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage: (language: string) => setLanguage(language),
        language
      }}>
      <IntlProvider
        locale={language}
        messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default SimpleLocalize;
