import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessTypeSchema, type AccessType } from "./access-type.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";
import { metadata19Schema, type Metadata19 } from "./metadata19.js";
import { productTypeSchema, type ProductType } from "./product-type.js";
import { streamPeriodSchema, type StreamPeriod } from "./stream-period.js";
import { type22Schema, type Type22 } from "./type22.js";

export type OnDemandPromotion = {
  accessType: AccessType;
  discountType: DiscountType;
  download: boolean;
  label: string | null;
  metadata: Metadata19;
  percentOff: number;
  productType: ProductType;
  streamPeriod: StreamPeriod | null;
  total: number;
  type: Type22;
  uri: string;
};

export const onDemandPromotionSchema: Schema<OnDemandPromotion> = s.object<OnDemandPromotion>({
  accessType: accessTypeSchema,
  discountType: discountTypeSchema,
  download: s.boolean(),
  label: s.nullable(s.string()),
  metadata: metadata19Schema,
  percentOff: s.number(),
  productType: productTypeSchema,
  streamPeriod: s.nullable(s.lazy(() => streamPeriodSchema)),
  total: s.number(),
  type: type22Schema,
  uri: s.string(),
  _keysMap: {
    accessType: "access_type",
    discountType: "discount_type",
    percentOff: "percent_off",
    productType: "product_type",
    streamPeriod: "stream_period",
  },
});
