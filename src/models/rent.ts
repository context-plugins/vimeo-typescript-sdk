import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stream1Schema, type Stream1 } from "./stream1.js";

/** The Rent interaction for the On Demand video. */
export type Rent = {
  /** The currency code for the user's region. */
  currency: string | null;
  /** The formatted display price for renting the On Demand video. */
  displayPrice: string | null;
  /** Whether the On Demand video has DRM. */
  drm: boolean;
  /** The time in ISO 8601 format when the rental period for the On Demand video expires. */
  expiresTime: string | null;
  /** The URL to rent the On Demand video on Vimeo. */
  link: string | null;
  /** The price to buy the On Demand video. */
  price: number | null;
  /** The time in ISO 8601 format when the On Demand video was rented. */
  purchaseTime: string | null;
  /**
   * The user's streaming access to the On Demand video.
   *
   * Option descriptions:
   *  * `available` - The video is available for streaming.
   *  * `purchased` - The user has purchased the video.
   *  * `restricted` - The user isn't permitted to stream the video.
   *  * `unavailable` - The video isn't available for streaming.
   */
  stream: Stream1;
  /** The product URI to rent the On Demand video. */
  uri: string | null;
};

export const rentSchema: Schema<Rent> = s.object<Rent>({
  currency: s.nullable(s.string()),
  displayPrice: s.nullable(s.string()),
  drm: s.boolean(),
  expiresTime: s.nullable(s.string()),
  link: s.nullable(s.string()),
  price: s.nullable(s.float64()),
  purchaseTime: s.nullable(s.string()),
  stream: stream1Schema,
  uri: s.nullable(s.string()),
  _keysMap: {
    displayPrice: "display_price",
    expiresTime: "expires_time",
    purchaseTime: "purchase_time",
  },
});
