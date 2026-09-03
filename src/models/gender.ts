import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Gender = {
  F: "f",
  M: "m",
  N: "n",
  O: "o",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender] | (string & {});

export const genderSchema: EnumSchema<Gender> = s.enumOf<Gender>(Gender);
