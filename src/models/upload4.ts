import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approach4Schema, type Approach4 } from "./approach4.js";

export type Upload4 = {
  /**
   * The approach by which to upload the version.
   *
   * Option descriptions:
   *  * `post` - Use the POST approach.
   *  * `pull` - Use the pull approach.
   *  * `tus` - Use the tus approach.
   */
  approach: Approach4;
  /**
   * The public URL from which to download the version when **upload.approach** is `pull`. This URL
   * must be valid for at least 24 hours.
   */
  link?: string;
  /** The app's redirect URL when **upload.approach** is `post`. */
  redirectUrl?: string;
  /** The upload size of the version. */
  size?: string;
};

export const upload4Schema: Schema<Upload4> = s.object<Upload4>({
  approach: approach4Schema,
  link: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  size: s.optional(s.string()),
  _keysMap: {
    redirectUrl: "redirect_url",
  },
});
