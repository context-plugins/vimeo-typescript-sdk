import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventAutomatedClosedCaptions = {
  /** Whether automated closed captions can be enabled. */
  autoCcCanBeEnabled: boolean;
  /** AI credits consumed per minute for auto-captions. */
  autoCcCreditsPerMinute: number;
  /** Whether the option for automated closed captions is enabled. */
  autoCcEnabled: boolean;
  /** Whether automated closed captions are unlimited for the user. */
  autoCcIsUnlimited: boolean;
  /**
   * A comma-separated list of keywords for enhancing the speech detection of automated closed
   * captions.
   */
  autoCcKeywords: string;
  /** The language of the automated closed captions. */
  autoCcLanguage: string | null;
  /**
   * The maximum seconds for automated closed captions (legacy, for users not yet on AI-credit
   * billing).
   */
  autoCcLimit: number | null;
  /**
   * The number of seconds remaining for automated closed captions (legacy, for users not yet on
   * AI-credit billing).
   */
  autoCcRemaining: number | null;
  /** AI credits consumed per minute per translation language. */
  autoCcTranslationCreditsPerMinute: number;
  /** Whether automated caption translations are enabled. */
  autoCcTranslationEnabled: boolean;
  /** The list of language codes for caption translations. */
  autoCcTranslationLanguages: string[];
  /** The ID of the event. */
  eventId: number;
};

export const eventAutomatedClosedCaptionsSchema: Schema<EventAutomatedClosedCaptions> =
  s.object<EventAutomatedClosedCaptions>({
    autoCcCanBeEnabled: s.boolean(),
    autoCcCreditsPerMinute: s.float64(),
    autoCcEnabled: s.boolean(),
    autoCcIsUnlimited: s.boolean(),
    autoCcKeywords: s.string(),
    autoCcLanguage: s.nullable(s.string()),
    autoCcLimit: s.nullable(s.float64()),
    autoCcRemaining: s.nullable(s.float64()),
    autoCcTranslationCreditsPerMinute: s.float64(),
    autoCcTranslationEnabled: s.boolean(),
    autoCcTranslationLanguages: s.array(s.string()),
    eventId: s.float64(),
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
