import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import translationEN from './translations/en.json';
import translationHR from './translations/hr.json';

const resources = {
  en: { translation: translationEN },
  hr: { translation: translationHR },
};

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources,
});

export default i18n;
