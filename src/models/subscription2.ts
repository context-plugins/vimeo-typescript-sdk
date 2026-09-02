import { s, type Schema } from "../core/index.js";
import { monthlySchema, type Monthly } from "./monthly.js";

export type Subscription2 = {
  monthly?: Monthly;
};

export const subscription2Schema: Schema<Subscription2> = s.object<Subscription2>({
  monthly: s.optional(s.lazy(() => monthlySchema)),
});
