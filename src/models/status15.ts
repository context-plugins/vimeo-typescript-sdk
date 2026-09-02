import { s, type EnumSchema } from "../core/index.js";

export const Status15 = {
  Ended: "ended",
  Started: "started",
} as const;
export type Status15 = (typeof Status15)[keyof typeof Status15] | (string & {});

export const status15Schema: EnumSchema<Status15> = s.enumOf<Status15>(Status15);
