import { s, type EnumSchema } from "../core/index.js";

export const Title1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Title1 = (typeof Title1)[keyof typeof Title1] | (string & {});

export const title1Schema: EnumSchema<Title1> = s.enumOf<Title1>(Title1);
