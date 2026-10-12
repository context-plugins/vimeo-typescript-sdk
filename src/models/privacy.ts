import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewSchema, type View } from "./view.js";

/** The privacy settings of the channel. */
export type Privacy = {
  /**
   * The privacy setting of the channel.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the channel. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `moderators` - Only moderators can access the channel.
   *  * `users` - Only registered users can access the channel. _This field is deprecated._
   */
  view: View;
};

export const privacySchema: Schema<Privacy> = s.object<Privacy>({
  view: viewSchema,
});
