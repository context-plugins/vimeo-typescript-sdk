import { s, type EnumSchema } from "../core/index.js";

export const Status9 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status9 = (typeof Status9)[keyof typeof Status9] | (string & {});

export const status9Schema: EnumSchema<Status9> = s.enumOf<Status9>(Status9);
