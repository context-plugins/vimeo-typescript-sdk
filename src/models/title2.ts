import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name1Schema, type Name1 } from "./name1.js";
import { owner2Schema, type Owner2 } from "./owner2.js";
import { portrait2Schema, type Portrait2 } from "./portrait2.js";

export type Title2 = {
  /**
   * How to handle the video title in the title bar of the embeddable player.
   *
   * Option descriptions:
   *  * `hide` - Hide the video title.
   *  * `show` - Show the video title.
   *  * `user` - Enable the user to decide.
   */
  name?: Name1;
  /**
   * How to handle the owner information in the title bar of the embeddable player.
   *
   * Option descriptions:
   *  * `hide` - Hide the owner info.
   *  * `show` - Show the owner info.
   *  * `user` - Enable the user to decide.
   */
  owner?: Owner2;
  /**
   * How to handle the owner portrait in the title bar of the embeddable player.
   *
   * Option descriptions:
   *  * `hide` - Hide the portrait.
   *  * `show` - Show the portrait.
   *  * `user` - Enable the user to decide.
   */
  portrait?: Portrait2;
};

export const title2Schema: Schema<Title2> = s.object<Title2>({
  name: s.optional(s.lazy(() => name1Schema)),
  owner: s.optional(s.lazy(() => owner2Schema)),
  portrait: s.optional(s.lazy(() => portrait2Schema)),
});
