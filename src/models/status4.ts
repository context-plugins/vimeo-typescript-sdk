import { s, type EnumSchema } from "../core/index.js";

export const Status4 = {
  DrmPlaysExceeded: "drm_plays_exceeded",
  Playable: "playable",
  PurchaseRequired: "purchase_required",
  Restricted: "restricted",
  Unavailable: "unavailable",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
