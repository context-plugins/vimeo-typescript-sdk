import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stream2Schema, type Stream2 } from "./stream2.js";

/** Information on subscribing to the On Demand video. */
export type Subscribe1 = {
  /** Whether the On Demand subscription has DRM. */
  drm?: boolean;
  /** The time in ISO 8601 format when the On Demand video expires. */
  expiresTime?: string | null;
  /** The URL to purchase the On Demand subscription on Vimeo. */
  link?: string | null;
  /** The time in ISO 8601 format when the On Demand video was purchased. */
  purchaseTime?: string | null;
  /**
   * The user's streaming access to the On Demand subscription.
   *
   * Option descriptions:
   *  * `available` - The On Demand subscription is available for streaming.
   *  * `purchased` - The On Demand subscription has been purchased.
   *  * `restricted` - Streaming for the On Demand subscription is restricted.
   *  * `unavailable` - The On Demand subscription is unavailable.
   */
  stream?: Stream2;
  /** The On Demand subscription's product URI. */
  uri?: string | null;
};

export const subscribe1Schema: Schema<Subscribe1> = s.object<Subscribe1>({
  drm: s.optional(s.boolean()),
  expiresTime: s.optionalNullable(s.string()),
  link: s.optionalNullable(s.string()),
  purchaseTime: s.optionalNullable(s.string()),
  stream: s.optional(s.lazy(() => stream2Schema)),
  uri: s.optionalNullable(s.string()),
  _keysMap: {
    expiresTime: "expires_time",
    purchaseTime: "purchase_time",
  },
});
