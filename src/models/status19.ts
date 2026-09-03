import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status19 = {
  Done: "done",
  Failed: "failed",
  Processing: "processing",
} as const;
export type Status19 = (typeof Status19)[keyof typeof Status19] | (string & {});

export const status19Schema: EnumSchema<Status19> = s.enumOf<Status19>(Status19);
