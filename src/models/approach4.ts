import { s, type EnumSchema } from "../core/index.js";

export const Approach4 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach4 = (typeof Approach4)[keyof typeof Approach4] | (string & {});

export const approach4Schema: EnumSchema<Approach4> = s.enumOf<Approach4>(Approach4);
