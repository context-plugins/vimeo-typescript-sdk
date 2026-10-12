import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Money = {
  /** The amount expressed as a numeral without currency formatting. */
  amount: number;
  /** The currency in which the amount is expressed. */
  currency: string;
  /** The amount expressed as a numeral with currency formatting. */
  formatted: string;
  /**
   * The amount expressed as a numeral in the lowest denomination. For example, 12 USD is expressed
   * as 1200.
   */
  unit: number;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.float64(),
  currency: s.string(),
  formatted: s.string(),
  unit: s.float64(),
});
