import { s, type Schema } from "../core/index.js";
import { stream1Schema, type Stream1 } from "./stream1.js";

export type Rent = {
  currency: string | null;
  displayPrice: string | null;
  drm: boolean;
  expiresTime: string | null;
  link: string | null;
  price: number | null;
  purchaseTime: string | null;
  stream: Stream1;
  uri: string | null;
};

export const rentSchema: Schema<Rent> = s.object<Rent>({
  currency: s.nullable(s.string()),
  displayPrice: s.nullable(s.string()),
  drm: s.boolean(),
  expiresTime: s.nullable(s.string()),
  link: s.nullable(s.string()),
  price: s.nullable(s.number()),
  purchaseTime: s.nullable(s.string()),
  stream: stream1Schema,
  uri: s.nullable(s.string()),
  _keysMap: {
    displayPrice: "display_price",
    expiresTime: "expires_time",
    purchaseTime: "purchase_time",
  },
});
