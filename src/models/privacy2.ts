import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { view3Schema, type View3 } from "./view3.js";

/** The privacy settings of the folder. */
export type Privacy2 = {
  /**
   * The privacy setting for accessing the folder.
   *
   * Option descriptions:
   *  * `anybody` - Anyone with the link can access the contents of the folder. This privacy setting
   *    appears as `Public` on the Vimeo front end.
   *  * `nobody` - Only the owner and those team members that the owner has explicitly invited can
   *    access the contents of the folder. This privacy setting appears as `Private` on the Vimeo
   *    front end.
   *  * `team` - Only those team members with the link can access the contents of the folder.
   */
  view: View3;
};

export const privacy2Schema: Schema<Privacy2> = s.object<Privacy2>({
  view: view3Schema,
});
