import { s, type EnumSchema } from "../core/index.js";

export const Status8 = {
  Canceled: "canceled",
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
