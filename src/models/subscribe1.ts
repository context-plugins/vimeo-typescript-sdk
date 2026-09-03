import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stream2Schema, type Stream2 } from "./stream2.js";

export type Subscribe1 = {
  drm?: boolean;
  expiresTime?: string | null;
  link?: string | null;
  purchaseTime?: string | null;
  stream?: Stream2;
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
