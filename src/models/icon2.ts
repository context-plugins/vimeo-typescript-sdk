import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Icon2 = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon2 = (typeof Icon2)[keyof typeof Icon2] | (string & {});

export const icon2Schema: EnumSchema<Icon2> = s.enumOf<Icon2>(Icon2);
