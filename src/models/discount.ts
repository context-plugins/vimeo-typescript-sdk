import { s, type Schema } from "../core/index.js";

export type Discount = {
  annual: number;
};

export const discountSchema: Schema<Discount> = s.object<Discount>({
  annual: s.number(),
});
