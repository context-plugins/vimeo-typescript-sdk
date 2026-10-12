import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about subscribing to the On Demand page, if subscription is enabled. */
export type Subscription1 = {
  /** Whether the On Demand product is active. */
  active: boolean;
  /** The link to the On Demand product. */
  link: string | null;
  /** The On Demand product's rental period. */
  period?: string;
  /** The accepted currencies and respective pricing for the On Demand product. */
  price: Record<string, unknown>;
};

export const subscription1Schema: Schema<Subscription1> = s.object<Subscription1>({
  active: s.boolean(),
  link: s.nullable(s.string()),
  period: s.optional(s.string()),
  price: s.record(s.string(), s.unknown()),
});
