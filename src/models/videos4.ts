import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { licenseSchema, type License } from "./license.js";
import { privacy1Schema, type Privacy1 } from "./privacy1.js";
import { ratingSchema, type Rating } from "./rating.js";

export type Videos4 = {
  /** Whether the user has automatic review link generation enabled by default. */
  autoGenerateReviewLink: boolean;
  /** Whether the user has automatic closed captions enabled by default. */
  autoccDisplayEnabledByDefault: boolean;
  /** The URI of the user's embed preset preference. */
  embedPresetUri?: string;
  /** Whether the user has hidden stats enabled by default. */
  hideStats: boolean;
  /** Whether the user keeps source files after upload. */
  keepSourceFiles: boolean;
  /**
   * The [Creative Commons](http://creativecommons.org/licenses/) license that the user has set to
   * be the default.
   *
   * Option descriptions:
   *  * `by` - The video is given under the Attribution license.
   *  * `by-nc` - The video is given under the Attribution Non-Commercial license.
   *  * `by-nc-nd` - The video is given under the Attribution Non-Commercial No Derivatives license.
   *  * `by-nc-sa` - The video is given under the Attribution Non-Commercial Share Alike license.
   *  * `by-nd` - The video is given under the Attribution No Derivatives license.
   *  * `by-sa` - The video is given under the Attribution Share Alike license.
   *  * `cc0` - The video is given under the Public Domain Dedication license.
   */
  license: License | null;
  /** The URI of the user's video page preset preference. */
  pagePresetUri?: string;
  /** The password for viewing the authenticated user's videos. */
  password?: string;
  privacy?: Privacy1;
  /**
   * An array of the authorized user's default content ratings.
   *
   * Option descriptions:
   *  * `drugs` - The video contains drug or alcohol use.
   *  * `language` - The video contains profanity or sexually suggestive content.
   *  * `nudity` - The video contains nudity.
   *  * `safe` - The video is suitable for all audiences.
   *  * `unrated` - The video hasn't been rated.
   *  * `violence` - The video contains violent or graphic content.
   */
  rating: Rating;
  /** Default number of days until a sharing link expires. 0 means no expiration. */
  sharingLinkDefaultExpiryDays: number;
};

export const videos4Schema: Schema<Videos4> = s.object<Videos4>({
  autoGenerateReviewLink: s.boolean(),
  autoccDisplayEnabledByDefault: s.boolean(),
  embedPresetUri: s.optional(s.string()),
  hideStats: s.boolean(),
  keepSourceFiles: s.boolean(),
  license: s.nullable(s.lazy(() => licenseSchema)),
  pagePresetUri: s.optional(s.string()),
  password: s.optional(s.string()),
  privacy: s.optional(s.lazy(() => privacy1Schema)),
  rating: ratingSchema,
  sharingLinkDefaultExpiryDays: s.float64(),
  _keysMap: {
    autoGenerateReviewLink: "auto_generate_review_link",
    autoccDisplayEnabledByDefault: "autocc_display_enabled_by_default",
    embedPresetUri: "embed_preset_uri",
    hideStats: "hide_stats",
    keepSourceFiles: "keep_source_files",
    pagePresetUri: "page_preset_uri",
    sharingLinkDefaultExpiryDays: "sharing_link_default_expiry_days",
  },
});
