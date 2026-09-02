import { s, type EnumSchema } from "../core/index.js";

export const Status20 = {
  Available: "available",
  Purchased: "purchased",
  Unavailable: "unavailable",
} as const;
export type Status20 = (typeof Status20)[keyof typeof Status20] | (string & {});

export const status20Schema: EnumSchema<Status20> = s.enumOf<Status20>(Status20);
