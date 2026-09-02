import { s, type EnumSchema } from "../core/index.js";

export const AutoCcLang = {
  DeDe: "de-DE",
  EnUs: "en-US",
  EsEs: "es-ES",
  FrFr: "fr-FR",
  PtBr: "pt-BR",
} as const;
export type AutoCcLang = (typeof AutoCcLang)[keyof typeof AutoCcLang] | (string & {});

export const autoCcLangSchema: EnumSchema<AutoCcLang> = s.enumOf<AutoCcLang>(AutoCcLang);
