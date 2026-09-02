import { s, type Schema } from "../core/index.js";

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
