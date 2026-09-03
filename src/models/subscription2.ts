import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monthlySchema, type Monthly } from "./monthly.js";

export type Subscription2 = {
  monthly?: Monthly;
};

export const subscription2Schema: Schema<Subscription2> = s.object<Subscription2>({
  monthly: s.optional(s.lazy(() => monthlySchema)),
});
