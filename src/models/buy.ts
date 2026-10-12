import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadSchema, type Download } from "./download.js";
import { streamSchema, type Stream } from "./stream.js";

/** The Buy interaction for the On Demand video. */
export type Buy = {
  /** The currency code for the user's region. */
  currency: string | null;
  /** The formatted display price for buying the On Demand video. */
  displayPrice: string | null;
  /**
   * The user's download access to the On Demand video.
   *
   * Option descriptions:
   *  * `available` - The video is available for download.
   *  * `purchased` - The user has purchased the video.
   *  * `restricted` - The user isn't permitted to download the video.
   *  * `unavailable` - The video isn't available for download.
   */
  download: Download;
  /** Whether the On Demand video has DRM. */
  drm: boolean;
  /** The URL to buy the On Demand video on Vimeo. */
  link: string | null;
  /** The price to buy the On Demand video. */
  price: number | null;
  /** The time in ISO 8601 format when the On Demand video was purchased. */
  purchaseTime: string | null;
  /**
   * The user's streaming access to the On Demand video.
   *
   * Option descriptions:
   *  * `available` - The video is available for streaming.
   *  * `purchased` - The user has purchased the video.
   *  * `restricted` - The user isn't permitted to stream the video.
   *  * `unavailable` - The video isn't available for streaming
   */
  stream: Stream;
  /** The product URI to purchase the On Demand video. */
  uri: string | null;
};

export const buySchema: Schema<Buy> = s.object<Buy>({
  currency: s.nullable(s.string()),
  displayPrice: s.nullable(s.string()),
  download: downloadSchema,
  drm: s.boolean(),
  link: s.nullable(s.string()),
  price: s.nullable(s.float64()),
  purchaseTime: s.nullable(s.string()),
  stream: streamSchema,
  uri: s.nullable(s.string()),
  _keysMap: {
    displayPrice: "display_price",
    purchaseTime: "purchase_time",
  },
});
