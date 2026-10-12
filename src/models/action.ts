import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The relevant contextual action.
 *
 * Option descriptions:
 *  * `Added to` - An Added To action.
 *  * `Appearance by` - An Appearance By action.
 *  * `Liked by` - A Liked By action.
 *  * `Uploaded by` - An Uploaded By action.
 */
export const Action = {
  AddedTo: "Added to",
  AppearanceBy: "Appearance by",
  LikedBy: "Liked by",
  UploadedBy: "Uploaded by",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
