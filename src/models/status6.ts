import { s, type EnumSchema } from "../core/index.js";

export const Status6 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
