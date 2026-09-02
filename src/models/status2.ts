import { s, type EnumSchema } from "../core/index.js";

export const Status2 = {
  Done: "done",
  Failed: "failed",
  Processing: "processing",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
