import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language in which the automated closed captions appear.
 *
 * Option descriptions:
 *  * `de-DE` - The language is German.
 *  * `en-US` - The language is English.
 *  * `es-ES` - The language is Spanish.
 *  * `fr-FR` - The language is French.
 *  * `pt-BR` - The language is Portuguese.
 */
export const AutoCcLang = {
  DeDe: "de-DE",
  EnUs: "en-US",
  EsEs: "es-ES",
  FrFr: "fr-FR",
  PtBr: "pt-BR",
} as const;
export type AutoCcLang = (typeof AutoCcLang)[keyof typeof AutoCcLang] | (string & {});

export const autoCcLangSchema: EnumSchema<AutoCcLang> = s.enumOf<AutoCcLang>(AutoCcLang);
