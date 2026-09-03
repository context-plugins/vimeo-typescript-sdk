import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutoCcLang = {
  DeDe: "de-DE",
  EnUs: "en-US",
  EsEs: "es-ES",
  FrFr: "fr-FR",
  PtBr: "pt-BR",
} as const;
export type AutoCcLang = (typeof AutoCcLang)[keyof typeof AutoCcLang] | (string & {});

export const autoCcLangSchema: EnumSchema<AutoCcLang> = s.enumOf<AutoCcLang>(AutoCcLang);
