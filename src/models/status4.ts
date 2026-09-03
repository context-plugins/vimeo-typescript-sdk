import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status4 = {
  DrmPlaysExceeded: "drm_plays_exceeded",
  Playable: "playable",
  PurchaseRequired: "purchase_required",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
