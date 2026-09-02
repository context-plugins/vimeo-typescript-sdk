import { s, type EnumSchema } from "../core/index.js";

export const Kind = {
  Category: "category",
  External: "external",
  Reason: "reason",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
