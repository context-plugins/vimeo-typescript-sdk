import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy12 = {
  Anybody: "anybody",
  EmbedOnly: "embed_only",
  Nobody: "nobody",
  Password: "password",
  Team: "team",
  Unlisted: "unlisted",
} as const;
export type Privacy12 = (typeof Privacy12)[keyof typeof Privacy12] | (string & {});

export const privacy12Schema: EnumSchema<Privacy12> = s.enumOf<Privacy12>(Privacy12);
