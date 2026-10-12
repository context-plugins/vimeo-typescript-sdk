import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Subscription information for an On Demand video. */
export type Subscribe = {
  /** Whether the On Demand video has DRM. */
  drm?: boolean;
  /** The time in ISO 8601 format when the subscription expires. */
  expiresTime?: string;
  /** The time in ISO 8601 format when the subscription was purchased. */
  purchaseTime?: string;
  /** The stream type. */
  stream?: string;
};

export const subscribeSchema: Schema<Subscribe> = s.object<Subscribe>({
  drm: s.optional(s.boolean()),
  expiresTime: s.optional(s.string()),
  purchaseTime: s.optional(s.string()),
  stream: s.optional(s.string()),
  _keysMap: {
    expiresTime: "expires_time",
    purchaseTime: "purchase_time",
  },
});
