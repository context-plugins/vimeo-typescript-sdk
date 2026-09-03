import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status20 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status20 = (typeof Status20)[keyof typeof Status20] | (string & {});

export const status20Schema: EnumSchema<Status20> = s.enumOf<Status20>(Status20);
