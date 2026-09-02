import { s, type EnumSchema } from "../core/index.js";

export const Status23 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status23 = (typeof Status23)[keyof typeof Status23] | (string & {});

export const status23Schema: EnumSchema<Status23> = s.enumOf<Status23>(Status23);
