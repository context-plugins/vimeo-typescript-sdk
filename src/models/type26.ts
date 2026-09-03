import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type26 = {
  Link: "link",
  NoIdea: "no idea",
  Text: "text",
  UploadedClips: "uploaded_clips",
  UploadedVideos: "uploaded_videos",
} as const;
export type Type26 = (typeof Type26)[keyof typeof Type26] | (string & {});

export const type26Schema: EnumSchema<Type26> = s.enumOf<Type26>(Type26);
