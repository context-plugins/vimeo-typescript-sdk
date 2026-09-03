import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Embed = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed = (typeof Embed)[keyof typeof Embed] | (string & {});

export const embedSchema: EnumSchema<Embed> = s.enumOf<Embed>(Embed);
