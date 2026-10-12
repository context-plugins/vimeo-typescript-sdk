import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { view6Schema, type View6 } from "./view6.js";

/** The privacy settings of the showcase. */
export type Privacy5 = {
  /** The showcase's password. This field appears only when **privacy.view** is `password`. */
  password?: string;
  /**
   * The access level of the showcase.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the showcase. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `embed_only` - The showcase doesn't appear on Vimeo, but the owner can embed it on other
   *    sites.
   *  * `nobody` - No one can access the showacse, including the owner. This privacy setting appears
   *    as `Private` on the Vimeo front end.
   *  * `password` - Only those with the password can access the showcase.
   *  * `team` - Only the owner and members of the owner's team can access the showcase.
   *  * `unlisted` - The showcase can't be accessed if the URL omits its unlisted hash.
   */
  view: View6;
};

export const privacy5Schema: Schema<Privacy5> = s.object<Privacy5>({
  password: s.optional(s.string()),
  view: view6Schema,
});
