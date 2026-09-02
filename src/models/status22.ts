import { s, type EnumSchema } from "../core/index.js";

export const Status22 = {
  Done: "done",
  Failed: "failed",
  Processing: "processing",
} as const;
export type Status22 = (typeof Status22)[keyof typeof Status22] | (string & {});

export const status22Schema: EnumSchema<Status22> = s.enumOf<Status22>(Status22);
