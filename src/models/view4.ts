import { s, type EnumSchema } from "../core/index.js";

export const View4 = {
  Anybody: "anybody",
  ColdStorage: "cold_storage",
  Contacts: "contacts",
  Disable: "disable",
  Nobody: "nobody",
  Password: "password",
  Ptv: "ptv",
  Ptvhide: "ptvhide",
  Stock: "stock",
  StockPurchased: "stock_purchased",
  Team: "team",
  Unlisted: "unlisted",
  Users: "users",
} as const;
export type View4 = (typeof View4)[keyof typeof View4] | (string & {});

export const view4Schema: EnumSchema<View4> = s.enumOf<View4>(View4);
