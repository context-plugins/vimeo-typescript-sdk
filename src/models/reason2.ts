import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { icon2Schema, type Icon2 } from "./icon2.js";

export type Reason2 = {
  /**
   * An icon that represents the reason why publish-to-social presets are disabled.
   *
   * Option descriptions:
   *  * `clock` - The reason is represented by a clock icon.
   *  * `create` - The reason is represented by a create icon.
   *  * `image` - The reason is represented by an image icon.
   *  * `theme` - The reason is represented by a theme icon.
   */
  icon?: Icon2;
  /** An explanation for the user about why publish-to-social presets are disabled. */
  message?: string;
};

export const reason2Schema: Schema<Reason2> = s.object<Reason2>({
  icon: s.optional(s.lazy(() => icon2Schema)),
  message: s.optional(s.string()),
});
