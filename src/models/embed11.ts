import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Embed11 = {
  Private: "private",
  Public: "public",
  Whitelist: "whitelist",
} as const;
export type Embed11 = (typeof Embed11)[keyof typeof Embed11] | (string & {});

export const embed11Schema: EnumSchema<Embed11> = s.enumOf<Embed11>(Embed11);
