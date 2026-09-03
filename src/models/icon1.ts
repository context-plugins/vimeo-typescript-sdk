import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Icon1 = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon1 = (typeof Icon1)[keyof typeof Icon1] | (string & {});

export const icon1Schema: EnumSchema<Icon1> = s.enumOf<Icon1>(Icon1);
