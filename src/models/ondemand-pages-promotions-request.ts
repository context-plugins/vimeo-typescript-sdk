import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessType1Schema, type AccessType1 } from "./access-type1.js";
import { discountType1Schema, type DiscountType1 } from "./discount-type1.js";
import { productType1Schema, type ProductType1 } from "./product-type1.js";
import { streamPeriod1Schema, type StreamPeriod1 } from "./stream-period1.js";
import { type41Schema, type Type41 } from "./type41.js";

export type OndemandPagesPromotionsRequest = {
  /**
   * The promotion access type, which is a purchase option that isn't available in the On Demand
   * container. Use the **download** and **stream_period** parameters to define additional
   * characteristics for the `vip` type.
   *
   * Option descriptions:
   *  * `default` - The promotion grants a discount on the existing purchase options for an On
   *    Demand container.
   *  * `vip` - The promotion grants free access to On Demand content before it's released.
   */
  accessType?: AccessType1;
  /** The promotion code. This parameter is ignored when the promotion type is `batch`. */
  code?: string;
  /**
   * The type of discount offered by the promotion code. When **access_type** is `vip`, the value of
   * this parameter must be `free`.
   *
   * Option descriptions:
   *  * `free` - The discount reduces the price to zero.
   *  * `percent` - The discount reduces the price by the percentage defined in the **percent_off**
   *    parameter.
   */
  discountType?: DiscountType1;
  /**
   * Whether the promotion grants download access to On Demand content. This field is required only
   * when the download access hasn't been defined in the On Demand container, or when
   * **access_type** is `vip` or **product_type** is `buy`.
   */
  download: boolean;
  /**
   * The time at which the promotion period ends. If this parameter has no value, the promotion
   * never expires.
   */
  endTime?: string;
  /**
   * The description of the promotion when the promotion type is `batch`. This parameter is ignored
   * when the promotion type is `single`.
   */
  label?: string;
  /**
   * The percentage of the discount. This parameter is applicable only when **discount_type** is
   * `percent`.
   */
  percentOff?: number;
  /**
   * The type of transaction to which the promotion applies. When **access_type** is `default`, the
   * default value is `any`. When **access_type** is `vip`, the default value is `rent` and the only
   * valid product types are `buy` and `rent`.
   *
   * Option descriptions:
   *  * `any` - The promotion applies to any transaction.
   *  * `buy` - The promotion applies only to purchased products.
   *  * `buy_episode` - The promotion applies only to purchased episodes.
   *  * `rent` - The promotion applies only to rented products.
   *  * `rent_episode` - The promotion applies only to rented episodes.
   *  * `subscribe` - The promotion applies only to subscriptions.
   */
  productType?: ProductType1;
  /**
   * The time at which the promotion period starts. If this parameter has no value, the start time
   * defaults to the time at which the promotion was created.
   */
  startTime?: string;
  /**
   * The amount of time for which the user can access On Demand content upon redeeming a promotion
   * code. This parameter is required only when the streaming period isn't defined in the On Demand
   * container, or when creating promotions where **access_type** is `vip` or **product_type** is
   * `rent`.
   *
   * Option descriptions:
   *  * `1_week` - The user can access On Demand content for a maximum of 1 week after redeeming a
   *    promotion code.
   *  * `1_year` - The user can access On Demand content for a maximum of 1 year after redeeming a
   *    promotion code.
   *  * `3_month` - The user can access On Demand content for a maximum of 3 months after redeeming
   *    a promotion code.
   *  * `6_month` - The user can access On Demand content for a maximum of 6 months after redeeming
   *    a promotion code.
   *  * `24_hour` - The user can access On Demand content for a maximum of 24 hours after redeeming
   *    a promotion code.
   *  * `30_day` - The user can access On Demand content for a maximum of 30 days after redeeming a
   *    promotion code.
   *  * `48_hour` - The user can access On Demand content for a maximum of 48 hours after redeeming
   *    a promotion code.
   *  * `72_hour` - The user can access On Demand content for a maximum of 72 hours after redeeming
   *    a promotion code.
   */
  streamPeriod: StreamPeriod1;
  /**
   * When **type** is `batch`, the total number of promotions to generate. When **type** is
   * `single`, the total number of uses of the promotion.
   */
  total: number;
  /**
   * The type of the promotion. When **access_type** is `vip`, the value for this parameter must be
   * `batch`.
   *
   * Option descriptions:
   *  * `batch` - The promotion type that generates many random codes to use one time each.
   *  * `single` - The promotion type that generates one code to use many times.
   */
  type: Type41;
};

export const ondemandPagesPromotionsRequestSchema: Schema<OndemandPagesPromotionsRequest> =
  s.object<OndemandPagesPromotionsRequest>({
    accessType: s.optional(s.lazy(() => accessType1Schema)),
    code: s.optional(s.string()),
    discountType: s.optional(s.lazy(() => discountType1Schema)),
    download: s.boolean(),
    endTime: s.optional(s.string()),
    label: s.optional(s.string()),
    percentOff: s.optional(s.float64()),
    productType: s.optional(s.lazy(() => productType1Schema)),
    startTime: s.optional(s.string()),
    streamPeriod: streamPeriod1Schema,
    total: s.float64(),
    type: type41Schema,
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
