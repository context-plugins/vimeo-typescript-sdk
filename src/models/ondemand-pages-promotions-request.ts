import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessType1Schema, type AccessType1 } from "./access-type1.js";
import { discountType1Schema, type DiscountType1 } from "./discount-type1.js";
import { productType1Schema, type ProductType1 } from "./product-type1.js";
import { streamPeriod1Schema, type StreamPeriod1 } from "./stream-period1.js";
import { type37Schema, type Type37 } from "./type37.js";

export type OndemandPagesPromotionsRequest = {
  accessType?: AccessType1;
  code?: string;
  discountType?: DiscountType1;
  download: boolean;
  endTime?: string;
  label?: string;
  percentOff?: number;
  productType?: ProductType1;
  startTime?: string;
  streamPeriod: StreamPeriod1;
  total: number;
  type: Type37;
};

export const ondemandPagesPromotionsRequestSchema: Schema<OndemandPagesPromotionsRequest> =
  s.object<OndemandPagesPromotionsRequest>({
    accessType: s.optional(s.lazy(() => accessType1Schema)),
    code: s.optional(s.string()),
    discountType: s.optional(s.lazy(() => discountType1Schema)),
    download: s.boolean(),
    endTime: s.optional(s.string()),
    label: s.optional(s.string()),
    percentOff: s.optional(s.number()),
    productType: s.optional(s.lazy(() => productType1Schema)),
    startTime: s.optional(s.string()),
    streamPeriod: streamPeriod1Schema,
    total: s.number(),
    type: type37Schema,
    _keysMap: {
      accessType: "access_type",
      discountType: "discount_type",
      endTime: "end_time",
      percentOff: "percent_off",
      productType: "product_type",
      startTime: "start_time",
      streamPeriod: "stream_period",
    },
  });
