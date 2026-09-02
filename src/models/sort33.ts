import { s, type EnumSchema } from "../core/index.js";

export const Sort33 = {
  Added: "added",
  Alphabetical: "alphabetical",
  Date: "date",
  Name: "name",
  PurchaseTime: "purchase_time",
  Rating: "rating",
  ReleaseDate: "release_date",
} as const;
export type Sort33 = (typeof Sort33)[keyof typeof Sort33] | (string & {});

export const sort33Schema: EnumSchema<Sort33> = s.enumOf<Sort33>(Sort33);
