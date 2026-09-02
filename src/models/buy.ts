import { s, type Schema } from "../core/index.js";
import { downloadSchema, type Download } from "./download.js";
import { streamSchema, type Stream } from "./stream.js";

export type Buy = {
  currency: string | null;
  displayPrice: string | null;
  download: Download;
  drm: boolean;
  link: string | null;
  price: number | null;
  purchaseTime: string | null;
  stream: Stream;
  uri: string | null;
};

export const buySchema: Schema<Buy> = s.object<Buy>({
  currency: s.nullable(s.string()),
  displayPrice: s.nullable(s.string()),
  download: downloadSchema,
  drm: s.boolean(),
  link: s.nullable(s.string()),
  price: s.nullable(s.number()),
  purchaseTime: s.nullable(s.string()),
  stream: streamSchema,
  uri: s.nullable(s.string()),
  _keysMap: {
    displayPrice: "display_price",
    purchaseTime: "purchase_time",
  },
});
