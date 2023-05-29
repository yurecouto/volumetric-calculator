import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

import english from "./en/english.json";
import spanish from "./es/spanish.json";
import portuguese from "./pt/portuguese.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt',
  fallbackLng: 'pt',
  resources: {
    pt: { translation: portuguese },
  },
});

export default i18n;
