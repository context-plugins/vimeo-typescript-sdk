import { s, type EnumSchema } from "../core/index.js";

export const Approach2 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach2 = (typeof Approach2)[keyof typeof Approach2] | (string & {});

export const approach2Schema: EnumSchema<Approach2> = s.enumOf<Approach2>(Approach2);
