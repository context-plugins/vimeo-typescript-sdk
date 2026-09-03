import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy11 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type Privacy11 = (typeof Privacy11)[keyof typeof Privacy11] | (string & {});

export const privacy11Schema: EnumSchema<Privacy11> = s.enumOf<Privacy11>(Privacy11);
