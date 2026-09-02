import { s, type EnumSchema } from "../core/index.js";

export const Embed4 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed4 = (typeof Embed4)[keyof typeof Embed4] | (string & {});

export const embed4Schema: EnumSchema<Embed4> = s.enumOf<Embed4>(Embed4);
