import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period5Schema, type Period5 } from "./period5.js";
import { price4Schema, type Price4 } from "./price4.js";

export type Rent3 = {
  active?: boolean;
  period?: Period5;
  price?: Price4;
};

export const rent3Schema: Schema<Rent3> = s.object<Rent3>({
  active: s.optional(s.boolean()),
  period: s.optional(s.lazy(() => period5Schema)),
  price: s.optional(s.lazy(() => price4Schema)),
});
