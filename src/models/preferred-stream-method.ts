import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PreferredStreamMethod = {
  Browser: "browser",
  Encoder: "encoder",
} as const;
export type PreferredStreamMethod =
  | (typeof PreferredStreamMethod)[keyof typeof PreferredStreamMethod]
  | (string & {});

export const preferredStreamMethodSchema: EnumSchema<PreferredStreamMethod> =
  s.enumOf<PreferredStreamMethod>(PreferredStreamMethod);
