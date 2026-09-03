import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price8Schema, type Price8 } from "./price8.js";

export type Rent5 = {
  price?: Price8;
};

export const rent5Schema: Schema<Rent5> = s.object<Rent5>({
  price: s.optional(s.lazy(() => price8Schema)),
});
