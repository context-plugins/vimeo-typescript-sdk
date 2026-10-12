import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An icon that represents the reason why publish-to-social presets are disabled.
 *
 * Option descriptions:
 *  * `clock` - The reason is represented by a clock icon.
 *  * `create` - The reason is represented by a create icon.
 *  * `image` - The reason is represented by an image icon.
 *  * `theme` - The reason is represented by a theme icon.
 */
export const Icon2 = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon2 = (typeof Icon2)[keyof typeof Icon2] | (string & {});

export const icon2Schema: EnumSchema<Icon2> = s.enumOf<Icon2>(Icon2);
