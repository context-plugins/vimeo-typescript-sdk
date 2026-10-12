import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of upload approach. For more information about upload approaches, refer to [Working with
 * Video Uploads](https://developer.vimeo.com/api/upload/videos#understanding-upload-approaches).
 *
 * Option descriptions:
 *  * `post` - The upload approach is POST.
 *  * `pull` - The upload approach is pull.
 *  * `tus` - The upload approach is tus.
 */
export const Approach5 = {
  Post: "post",
  Pull: "pull",
  Tus: "tus",
} as const;
export type Approach5 = (typeof Approach5)[keyof typeof Approach5] | (string & {});

export const approach5Schema: EnumSchema<Approach5> = s.enumOf<Approach5>(Approach5);
