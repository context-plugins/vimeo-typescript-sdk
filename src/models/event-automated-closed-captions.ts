import { s, type Schema } from "../core/index.js";

export type EventAutomatedClosedCaptions = {
  autoCcCanBeEnabled: boolean;
  autoCcCreditsPerMinute: number;
  autoCcEnabled: boolean;
  autoCcIsUnlimited: boolean;
  autoCcKeywords: string;
  autoCcLanguage: string | null;
  autoCcLimit: number | null;
  autoCcRemaining: number | null;
  autoCcTranslationCreditsPerMinute: number;
  autoCcTranslationEnabled: boolean;
  autoCcTranslationLanguages: string[];
  eventId: number;
};

export const eventAutomatedClosedCaptionsSchema: Schema<EventAutomatedClosedCaptions> =
  s.object<EventAutomatedClosedCaptions>({
    autoCcCanBeEnabled: s.boolean(),
    autoCcCreditsPerMinute: s.number(),
    autoCcEnabled: s.boolean(),
    autoCcIsUnlimited: s.boolean(),
    autoCcKeywords: s.string(),
    autoCcLanguage: s.nullable(s.string()),
    autoCcLimit: s.nullable(s.number()),
    autoCcRemaining: s.nullable(s.number()),
    autoCcTranslationCreditsPerMinute: s.number(),
    autoCcTranslationEnabled: s.boolean(),
    autoCcTranslationLanguages: s.array(s.string()),
    eventId: s.number(),
    _keysMap: {
      autoCcCanBeEnabled: "auto_cc_can_be_enabled",
      autoCcCreditsPerMinute: "auto_cc_credits_per_minute",
      autoCcEnabled: "auto_cc_enabled",
      autoCcIsUnlimited: "auto_cc_is_unlimited",
      autoCcKeywords: "auto_cc_keywords",
      autoCcLanguage: "auto_cc_language",
      autoCcLimit: "auto_cc_limit",
      autoCcRemaining: "auto_cc_remaining",
      autoCcTranslationCreditsPerMinute: "auto_cc_translation_credits_per_minute",
      autoCcTranslationEnabled: "auto_cc_translation_enabled",
      autoCcTranslationLanguages: "auto_cc_translation_languages",
      eventId: "event_id",
    },
  });
