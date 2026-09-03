import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status6 = {
  Blocked: "blocked",
  Completed: "completed",
  ExceedsMaximumDuration: "exceeds_maximum_duration",
  Failed: "failed",
  InProgress: "in_progress",
  LanguageNotSupported: "language_not_supported",
  NoSpeech: "no_speech",
  NotStarted: "not_started",
  Unknown: "unknown",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
