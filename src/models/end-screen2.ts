import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type38Schema, type Type38 } from "./type38.js";

export type EndScreen2 = {
  /**
   * The end screen type.
   *
   * Option descriptions:
   *  * `beginning` - The end screen is a thumbnail.
   *  * `custom` - The end screen is custom.
   *  * `email` - The end screen is an email form.
   *  * `image` - The end screen is an image.
   *  * `link` - The end screen is a link.
   *  * `loop` - The end screen is a loop.
   *  * `nothing` - There is no end screen.
   *  * `share` - The end screen is a share button.
   *  * `text` - The end screen is text.
   *  * `threevideos` - The end screen is three video suggestions.
   *  * `videos` - The end screen is video suggestions.
   */
  type?: Type38;
};

export const endScreen2Schema: Schema<EndScreen2> = s.object<EndScreen2>({
  type: s.optional(s.lazy(() => type38Schema)),
});
