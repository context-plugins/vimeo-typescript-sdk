import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The preset outro type.
 *
 * Option descriptions:
 *  * `link` - The outro includes a link.
 *  * `no idea` - The outro type is `no idea`. The outro includes uploaded videos.
 *  * `text` - The outro includes text.
 *  * `uploaded_clips` - The outro includes uploaded videos.
 *  * `uploaded_videos` - The outro includes uploaded videos.
 */
export const Type26 = {
  Link: "link",
  NoIdea: "no idea",
  Text: "text",
  UploadedClips: "uploaded_clips",
  UploadedVideos: "uploaded_videos",
} as const;
export type Type26 = (typeof Type26)[keyof typeof Type26] | (string & {});

export const type26Schema: EnumSchema<Type26> = s.enumOf<Type26>(Type26);
