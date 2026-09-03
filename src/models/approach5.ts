import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Approach5 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach5 = (typeof Approach5)[keyof typeof Approach5] | (string & {});

export const approach5Schema: EnumSchema<Approach5> = s.enumOf<Approach5>(Approach5);
