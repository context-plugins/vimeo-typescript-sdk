import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort45 = {
  Date: "date",
  Default: "default",
  Episode: "episode",
  Manual: "manual",
  Name: "name",
  PurchaseTime: "purchase_time",
  ReleaseDate: "release_date",
} as const;
export type Sort45 = (typeof Sort45)[keyof typeof Sort45] | (string & {});

export const sort45Schema: EnumSchema<Sort45> = s.enumOf<Sort45>(Sort45);
