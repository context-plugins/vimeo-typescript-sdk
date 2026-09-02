import { s, type EnumSchema } from "../core/index.js";

export const Embed8 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed8 = (typeof Embed8)[keyof typeof Embed8] | (string & {});

export const embed8Schema: EnumSchema<Embed8> = s.enumOf<Embed8>(Embed8);
