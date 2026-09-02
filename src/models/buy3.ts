import { s, type Schema } from "../core/index.js";
import { price2Schema, type Price2 } from "./price2.js";

export type Buy3 = {
  active?: boolean;
  download?: boolean;
  price?: Price2;
};

export const buy3Schema: Schema<Buy3> = s.object<Buy3>({
  active: s.optional(s.boolean()),
  download: s.optional(s.boolean()),
  price: s.optional(s.lazy(() => price2Schema)),
});
