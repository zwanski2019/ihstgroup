
import { en } from './en';
import { fr } from './fr';

export type TranslationKeys = typeof en;

export const translations = {
  en,
  fr
};

export type LanguageCode = keyof typeof translations;
