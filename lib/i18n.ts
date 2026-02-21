import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export const defaultNS = 'translation';
export const resources = {
  en: { [defaultNS]: en },
  fr: { [defaultNS]: fr },
} as const;

export type SupportedLocale = keyof typeof resources;

const STORAGE_KEY = 'tkhtech-locale';

export function getStoredLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr') return stored;
  return 'en';
}

export function setStoredLocale(locale: SupportedLocale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, locale);
}

i18n.use(initReactI18next).init({
  resources,
  lng: typeof window !== 'undefined' ? getStoredLocale() : 'en',
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

// Initialize with stored locale on client and set document lang
if (typeof window !== 'undefined') {
  const stored = getStoredLocale();
  if (stored !== i18n.language) {
    i18n.changeLanguage(stored);
  }
  document.documentElement.lang = i18n.language;
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
