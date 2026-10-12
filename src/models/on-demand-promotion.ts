import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessTypeSchema, type AccessType } from "./access-type.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";
import { metadata19Schema, type Metadata19 } from "./metadata19.js";
import { productTypeSchema, type ProductType } from "./product-type.js";
import { streamPeriodSchema, type StreamPeriod } from "./stream-period.js";
import { type22Schema, type Type22 } from "./type22.js";

export type OnDemandPromotion = {
  /**
   * The type of access that the promotion grants.
   *
   * Option descriptions:
   *  * `default` - The promotion grants discounts on existing product offerings.
   *  * `vip` - The promotion grants free access to On Demand content before it's released, or to
   *    access types that aren't part of the existing product offerings.
   */
  accessType: AccessType;
  /**
   * The type of discount that the promotion provides.
   *
   * Option descriptions:
   *  * `dollars` - The promotion discounts a fixed amount from the full purchase price.
   *  * `free` - The promotion discounts the full purchase price. When **access_type** is `vip`,
   *    **discount_type** is always `free`.
   *  * `percent` - The promotion discounts a percentage of the full purchase price.
   */
  discountType: DiscountType;
  /** Whether the promotion grants download access to On Demand content. */
  download: boolean;
  /** The prefix string for batch codes, or the null value for single codes. */
  label: string | null;
  /** The video's metadata. */
  metadata: Metadata19;
  /**
   * When **discount_type** is `percent`, the percentage amount that is deducted from the product
   * price.
   */
  percentOff: number;
  /**
   * The type of product to which the promotion can be applied. Only the `buy` and `rent` options
   * are available when **access_type** is `vip`.
   *
   * Option descriptions:
   *  * `any` - The promotion can be applied to any product.
   *  * `buy` - The promotion can be applied to a buyable single video.
   *  * `buy_episode` - The promotion can be applied to a buyable single episode.
   *  * `rent` - The promotion can be applied to a rentable single video.
   *  * `rent_episode` - The promotion can be applied to a rentable single episode.
   *  * `subscribe` - The promotion can be applied to a subscription.
   */
  productType: ProductType;
  /**
   * The amount of time that the user has access to the On Demand content after redeeming a
   * promotional code.
   *
   * Option descriptions:
   *  * `1_week` - Access lasts for one week.
   *  * `1_year` - Access lasts for one year.
   *  * `3_month` - Access lasts for three months.
   *  * `6_month` - Access lasts for six months.
   *  * `24_hour` - Access lasts for 24 hours.
   *  * `30_days` - Access lasts for 30 days.
   *  * `48_hour` - Access lasts for 48 hours.
   *  * `72_hour` - Access lasts for 72 hours.
   */
  streamPeriod: StreamPeriod | null;
  /**
   * When **type** is `single`, the total number of times that the promotion can be used. When
   * **type** is `batch` or `batch_prefix`, the total number of promo codes that have been
   * generated.
   */
  total: number;
  /**
   * The way in which the promotion generates promo codes.
   *
   * Option descriptions:
   *  * `batch` - The promotion provides a unique promotional code for each user.
   *  * `batch_prefix` - Like `batch`, except that all codes have a similar prefix string. _This
   *    option is deprecated, yet it may still appear for some users._
   *  * `single` - The promotion provides a single promotional code for all users.
   */
  type: Type22;
  /** The promotion's canonical relative URI. */
  uri: string;
};

export const onDemandPromotionSchema: Schema<OnDemandPromotion> = s.object<OnDemandPromotion>({
  accessType: accessTypeSchema,
  discountType: discountTypeSchema,
  download: s.boolean(),
  label: s.nullable(s.string()),
  metadata: metadata19Schema,
  percentOff: s.float64(),
  productType: productTypeSchema,
  streamPeriod: s.nullable(s.lazy(() => streamPeriodSchema)),
  total: s.float64(),
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
