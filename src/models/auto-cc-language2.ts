import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutoCcLanguage2 = {
  DeDe: "de-DE",
  EnUs: "en-US",
  EsEs: "es-ES",
  FrFr: "fr-FR",
  PtBr: "pt-BR",
} as const;
export type AutoCcLanguage2 = (typeof AutoCcLanguage2)[keyof typeof AutoCcLanguage2] | (string & {});

export const autoCcLanguage2Schema: EnumSchema<AutoCcLanguage2> = s.enumOf<AutoCcLanguage2>(AutoCcLanguage2);
