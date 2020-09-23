import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const apiKey = "5e13e3019cff4dc6abe36009445f0883";
const loadPath = `https://api.simplelocalize.io/api/v1/i18next/translations/{{lng}}/{{ns}}?api_key=${apiKey}`;

i18n
  // Enables the i18next backend
  .use(Backend)
  // Enable automatic language detection
  .use(LanguageDetector)
  // Enables the hook initialization module
  .use (initReactI18next)
  .init({
    // Standard language used
    fallbackLng: 'en',
    debug: true,
    ns: ["default"],
    defaultNS: "default",
    //Detects and caches a cookie from the language provided
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: loadPath
    }
  })

export default i18n;
