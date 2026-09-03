import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Money = {
  amount: number;
  currency: string;
  formatted: string;
  unit: number;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.number(),
  currency: s.string(),
  formatted: s.string(),
  unit: s.number(),
});
