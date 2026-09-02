import { s, type EnumSchema } from "../core/index.js";

export const Status7 = {
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
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
