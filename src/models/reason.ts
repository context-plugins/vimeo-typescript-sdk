import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconSchema, type Icon } from "./icon.js";

export type Reason = {
  /**
   * An icon that represents the reason why showcase presets are disabled. This data requires a
   * bearer token with the `private` scope.
   *
   * Option descriptions:
   *  * `clock` - The reason is represented by a clock icon.
   *  * `create` - The reason is represented by a create icon.
   *  * `image` - The reason is represented by an image icon.
   *  * `theme` - The reason is represented by a theme icon.
   */
  icon?: Icon;
  /**
   * An explanation for the user about why showcase presets are disabled. This data requires a
   * bearer token with the `private` scope.
   */
  message?: string;
};

export const reasonSchema: Schema<Reason> = s.object<Reason>({
  icon: s.optional(s.lazy(() => iconSchema)),
  message: s.optional(s.string()),
});
