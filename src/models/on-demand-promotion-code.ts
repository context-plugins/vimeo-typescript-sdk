import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnDemandPromotionCode = {
  /** The Vimeo promotion code. */
  code: string;
  /** The link to redeem the promotion code. */
  link: string;
  /** The total number of times that this code can be used. */
  maxUses: number;
  /** The current number of times that this code has been used. */
  uses: number;
};

export const onDemandPromotionCodeSchema: Schema<OnDemandPromotionCode> = s.object<OnDemandPromotionCode>({
  code: s.string(),
  link: s.string(),
  maxUses: s.float64(),
  uses: s.float64(),
  _keysMap: {
    maxUses: "max_uses",
  },
});
