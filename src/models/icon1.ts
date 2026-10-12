import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An icon that represents the reason why available showcase presets are disabled. This data
 * requires a bearer token with the `private` scope.
 *
 * Option descriptions:
 *  * `clock` - The reason is represented by a clock icon.
 *  * `create` - The reason is represented by a create icon.
 *  * `image` - The reason is represented by an image icon.
 *  * `theme` - The reason is represented by a theme icon.
 */
export const Icon1 = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon1 = (typeof Icon1)[keyof typeof Icon1] | (string & {});

export const icon1Schema: EnumSchema<Icon1> = s.enumOf<Icon1>(Icon1);
