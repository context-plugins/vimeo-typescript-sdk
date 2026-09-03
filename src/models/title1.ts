import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Title1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Title1 = (typeof Title1)[keyof typeof Title1] | (string & {});

export const title1Schema: EnumSchema<Title1> = s.enumOf<Title1>(Title1);
