import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subscribe = {
  drm?: boolean;
  expiresTime?: string;
  purchaseTime?: string;
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
