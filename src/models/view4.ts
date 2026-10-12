import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The general privacy setting of the video.
 *
 * Option descriptions:
 *  * `anybody` - Anyone can access the video. This privacy setting appears as `Public` on the Vimeo
 *    front end.
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
 *  * `stock_purchased` - The purchased stock footage is accessible and searchable from Vimeo. _This
 *    field is deprecated._
 *  * `team` - Anyone on the team can access the video. This privacy setting appears as `Company
 *    only` on the Vimeo front end.
 *  * `unlisted` - The video is accessible but not searchable from Vimeo.
 *  * `users` - Only Vimeo members can access the video. _This field is deprecated._
 */
export const View4 = {
  Anybody: "anybody",
  ColdStorage: "cold_storage",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Ptv: "ptv",
  Ptvhide: "ptvhide",
  Stock: "stock",
  StockPurchased: "stock_purchased",
  Team: "team",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View4 = (typeof View4)[keyof typeof View4] | (string & {});

export const view4Schema: EnumSchema<View4> = s.enumOf<View4>(View4);
