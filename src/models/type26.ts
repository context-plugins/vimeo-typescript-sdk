import { s, type EnumSchema } from "../core/index.js";

export const Type26 = {
  Link: "link",
  NoIdea: "no idea",
  Text: "text",
  UploadedClips: "uploaded_clips",
  UploadedVideos: "uploaded_videos",
} as const;
export type Type26 = (typeof Type26)[keyof typeof Type26] | (string & {});

export const type26Schema: EnumSchema<Type26> = s.enumOf<Type26>(Type26);
