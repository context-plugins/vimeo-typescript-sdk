import { s, type Schema } from "../core/index.js";
import { period6Schema, type Period6 } from "./period6.js";
import { price5Schema, type Price5 } from "./price5.js";

export type Rent4 = {
  active?: boolean;
  period?: Period6;
  price?: Price5;
};

export const rent4Schema: Schema<Rent4> = s.object<Rent4>({
  active: s.optional(s.boolean()),
  period: s.optional(s.lazy(() => period6Schema)),
  price: s.optional(s.lazy(() => price5Schema)),
});
