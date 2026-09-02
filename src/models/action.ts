import { s, type EnumSchema } from "../core/index.js";

export const Action = {
  AddedTo: "Added to",
  AppearanceBy: "Appearance by",
  LikedBy: "Liked by",
  UploadedBy: "Uploaded by",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
