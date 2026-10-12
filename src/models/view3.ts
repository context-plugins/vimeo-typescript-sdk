import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const View3 = {
  Anybody: "anybody",
  Nobody: "nobody",
  Team: "team",
} as const;
export type View3 = (typeof View3)[keyof typeof View3] | (string & {});

export const view3Schema: EnumSchema<View3> = s.enumOf<View3>(View3);
