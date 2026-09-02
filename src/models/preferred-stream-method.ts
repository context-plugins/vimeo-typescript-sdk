import { s, type EnumSchema } from "../core/index.js";

export const PreferredStreamMethod = {
  Browser: "browser",
  Encoder: "encoder",
} as const;
export type PreferredStreamMethod =
  | (typeof PreferredStreamMethod)[keyof typeof PreferredStreamMethod]
  | (string & {});

export const preferredStreamMethodSchema: EnumSchema<PreferredStreamMethod> =
  s.enumOf<PreferredStreamMethod>(PreferredStreamMethod);
