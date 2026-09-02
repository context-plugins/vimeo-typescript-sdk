import { s, type EnumSchema } from "../core/index.js";

export const Embed = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed = (typeof Embed)[keyof typeof Embed] | (string & {});

export const embedSchema: EnumSchema<Embed> = s.enumOf<Embed>(Embed);
