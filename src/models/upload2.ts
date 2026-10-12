import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approach2Schema, type Approach2 } from "./approach2.js";

export type Upload2 = {
  /**
   * The upload approach.
   *
   * Option descriptions:
   *  * `post` - Use the POST approach.
   *  * `pull` - Use the pull approach.
   *  * `tus` - Use the tus approach.
   */
  approach: Approach2;
  /**
   * The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use
   * this parameter when **approach** is `pull`.
   */
  link?: string;
  /** The app's redirect URL. Use this parameter when **approach** is `post`. */
  redirectUrl?: string;
  /**
   * The size in bytes of the video to upload. The maximum value of this field is `322122547200`,
   * which corresponds to 300 GB.
   */
  size?: string;
};

export const upload2Schema: Schema<Upload2> = s.object<Upload2>({
  approach: approach2Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});
