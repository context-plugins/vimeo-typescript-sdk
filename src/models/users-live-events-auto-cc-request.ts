import { s, type Schema } from "../core/index.js";
import { autoCcLang1Schema, type AutoCcLang1 } from "./auto-cc-lang1.js";

export type UsersLiveEventsAutoCcRequest = {
  autoCcEnabled: boolean;
  autoCcKeywords?: string;
  autoCcLang?: AutoCcLang1;
  autoCcTranslationEnabled?: boolean;
  autoCcTranslationLanguages?: string[];
};

export const usersLiveEventsAutoCcRequestSchema: Schema<UsersLiveEventsAutoCcRequest> =
  s.object<UsersLiveEventsAutoCcRequest>({
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
