import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Action = {
  AddedTo: "Added to",
  AppearanceBy: "Appearance by",
  LikedBy: "Liked by",
  UploadedBy: "Uploaded by",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
