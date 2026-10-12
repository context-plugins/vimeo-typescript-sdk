import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An icon that represents the reason why showcase presets are disabled. This data requires a bearer
 * token with the `private` scope.
 *
 * Option descriptions:
 *  * `clock` - The reason is represented by a clock icon.
 *  * `create` - The reason is represented by a create icon.
 *  * `image` - The reason is represented by an image icon.
 *  * `theme` - The reason is represented by a theme icon.
 */
export const Icon = {
  Clock: "clock",
  Create: "create",
  Image: "image",
  Theme: "theme",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon] | (string & {});

export const iconSchema: EnumSchema<Icon> = s.enumOf<Icon>(Icon);
