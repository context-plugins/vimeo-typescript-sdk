import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { autoCcLang1Schema, type AutoCcLang1 } from "./auto-cc-lang1.js";

export type MeLiveEventsAutoCcRequest = {
  autoCcEnabled: boolean;
  autoCcKeywords?: string;
  autoCcLang?: AutoCcLang1;
  autoCcTranslationEnabled?: boolean;
  autoCcTranslationLanguages?: string[];
};

export const meLiveEventsAutoCcRequestSchema: Schema<MeLiveEventsAutoCcRequest> =
  s.object<MeLiveEventsAutoCcRequest>({
    autoCcEnabled: s.boolean(),
    autoCcKeywords: s.optional(s.string()),
    autoCcLang: s.optional(s.lazy(() => autoCcLang1Schema)),
    autoCcTranslationEnabled: s.optional(s.boolean()),
    autoCcTranslationLanguages: s.optional(s.array(s.string())),
    _keysMap: {
      autoCcEnabled: "auto_cc_enabled",
      autoCcKeywords: "auto_cc_keywords",
      autoCcLang: "auto_cc_lang",
      autoCcTranslationEnabled: "auto_cc_translation_enabled",
      autoCcTranslationLanguages: "auto_cc_translation_languages",
    },
  });
