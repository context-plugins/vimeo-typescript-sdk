import { s, type EnumSchema } from "../core/index.js";

export const Gender = {
  F: "f",
  M: "m",
  N: "n",
  O: "o",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender] | (string & {});

export const genderSchema: EnumSchema<Gender> = s.enumOf<Gender>(Gender);
