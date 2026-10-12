import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approach5Schema, type Approach5 } from "./approach5.js";

export type Upload5 = {
  /**
   * The type of upload approach. For more information about upload approaches, refer to [Working
   * with Video
   * Uploads](https://developer.vimeo.com/api/upload/videos#understanding-upload-approaches).
   *
   * Option descriptions:
   *  * `post` - The upload approach is POST.
   *  * `pull` - The upload approach is pull.
   *  * `tus` - The upload approach is tus.
   */
  approach: Approach5;
  /**
   * The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use
   * this parameter when **approach** is `pull`.
   */
  link?: string;
  /** The app's redirect URL. Use this parameter when **approach** is `post`. */
  redirectUrl?: string;
  /**
   * The size in bytes of the asset to upload. The maximum value of this field is `322122547200`,
   * which corresponds to 300 GB.
   */
  size?: string;
};

export const upload5Schema: Schema<Upload5> = s.object<Upload5>({
  approach: approach5Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});
