import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ru from './translations/ru.json';

import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import { format } from 'date-fns';

import { registerLocale } from 'react-datepicker';

registerLocale('en', enLocale);
registerLocale('ru', ruLocale);

const datePickerLocaleMap: { [key: string]: Locale } = {
  ru: ruLocale,
  en: enLocale,
};

export const datePickerLocale = () => datePickerLocaleMap[i18n.language];
export const formatDate = (date: Date, dateFormat: string) => format(date, dateFormat, { locale: datePickerLocale() });

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  ru: {
    translation: {
      ...ru,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
