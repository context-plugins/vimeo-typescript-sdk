import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { icon1Schema, type Icon1 } from "./icon1.js";

export type Reason1 = {
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
  icon?: Icon1;
  /**
   * An explanation for the user about why available showcase presets are disabled. This data
   * requires a bearer token with the `private` scope.
   */
  message?: string;
};

export const reason1Schema: Schema<Reason1> = s.object<Reason1>({
  icon: s.optional(s.lazy(() => icon1Schema)),
  message: s.optional(s.string()),
});
