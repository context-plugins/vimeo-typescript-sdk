import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments2Schema, type Comments2 } from "./comments2.js";
import { embed1Schema, type Embed1 } from "./embed1.js";
import { view4Schema, type View4 } from "./view4.js";

/** The video's privacy setting. */
export type Privacy3 = {
  /** Whether the video can be added to collections. */
  add: boolean;
  /** Whether the share link is usable. */
  allowShareLink: boolean;
  /**
   * The video's comment permission setting.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can comment on the video.
   *  * `contacts` - Only contacts can comment on the video.
   *  * `nobody` - No one can comment on the video.
   */
  comments: Comments2;
  /** Whether the video can be downloaded. */
  download: boolean;
  /**
   * The video's embed permission setting.
   *
   * Option descriptions:
   *  * `private` - The video is private.
   *  * `public` - Anyone can embed the video.
   *  * `whitelist` - The video can be embedded on specific domains.
   */
  embed: Embed1;
  /**
   * The original privacy setting the video had before its current privacy was restricted by the
   * owner's plan. Populated in two cases: for cold-storage videos (`privacy.view = "purgatory"`),
   * the privacy the video had before being moved to cold storage; for cold-privacy videos
   * (`is_cold_privacy_restricted = true`), the original premium privacy (for example `unlisted`)
   * that the free plan no longer supports while `privacy.view` is collapsed to `nobody`. Absent for
   * videos that aren't restricted.
   */
  originalView?: string;
  /**
   * The general privacy setting of the video.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the video. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `cold_storage` - The video is temporarily frozen because the owner exceeded their plan's
   *    storage limit. The video page renders with an in-player overlay.
   *  * `contacts` - Only contacts can access the video. _This field is deprecated._
   *  * `disable` - The video is hidden from Vimeo. This privacy setting appears as `Embed only` on
   *    the Vimeo front end.
   *  * `nobody` - No one besides the owner can access the video. This privacy setting appears as
   *    `Private` on the Vimeo front end.
   *  * `password` - Anyone with the video's password can access the video.
   *  * `ptv` - The Vimeo On Demand video is accessible and searchable from Vimeo. _This field is
   *    deprecated._
   *  * `ptvhide` - The Vimeo On Demand video is hidden from Vimeo. _This field is deprecated._
   *  * `stock` - The stock footage is accessible and searchable from Vimeo. _This field is
   *    deprecated._
   *  * `stock_purchased` - The purchased stock footage is accessible and searchable from Vimeo.
   *    _This field is deprecated._
   *  * `team` - Anyone on the team can access the video. This privacy setting appears as `Company
   *    only` on the Vimeo front end.
   *  * `unlisted` - The video is accessible but not searchable from Vimeo.
   *  * `users` - Only Vimeo members can access the video. _This field is deprecated._
   */
  view: View4;
};

export const privacy3Schema: Schema<Privacy3> = s.object<Privacy3>({
  add: s.boolean(),
  allowShareLink: s.boolean(),
  comments: comments2Schema,
  download: s.boolean(),
  embed: embed1Schema,
  originalView: s.optional(s.string()),
  view: view4Schema,
  _keysMap: {
    allowShareLink: "allow_share_link",
    originalView: "original_view",
  },
});
