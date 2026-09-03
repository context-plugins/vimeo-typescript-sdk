import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Icon = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon] | (string & {});

export const iconSchema: EnumSchema<Icon> = s.enumOf<Icon>(Icon);
