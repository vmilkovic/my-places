import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import { FALLBACK_LANGUAGE } from './../../utils/constants';

import translationEN from './translations/en.json';
import translationHR from './translations/hr.json';

const resources = {
  en: { translation: translationEN },
  hr: { translation: translationHR },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: FALLBACK_LANGUAGE,
  resources,
});

export default i18n;
