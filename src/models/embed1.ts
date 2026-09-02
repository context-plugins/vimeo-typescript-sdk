import { s, type EnumSchema } from "../core/index.js";

export const Embed1 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed1 = (typeof Embed1)[keyof typeof Embed1] | (string & {});

export const embed1Schema: EnumSchema<Embed1> = s.enumOf<Embed1>(Embed1);
