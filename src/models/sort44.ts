import { s, type EnumSchema } from "../core/index.js";

export const Sort44 = {
  Date: "date",
  Default: "default",
  Manual: "manual",
  Name: "name",
  PurchaseTime: "purchase_time",
  ReleaseDate: "release_date",
} as const;
export type Sort44 = (typeof Sort44)[keyof typeof Sort44] | (string & {});

export const sort44Schema: EnumSchema<Sort44> = s.enumOf<Sort44>(Sort44);
