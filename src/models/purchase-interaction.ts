import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscribe1Schema, type Subscribe1 } from "./subscribe1.js";

export type PurchaseInteraction = {
  /** Information on purchasing the On Demand video. */
  buy?: Record<string, unknown> | null;
  /** Information on renting the On Demand video. */
  rent?: Record<string, unknown> | null;
  /** Information on subscribing to the On Demand video. */
  subscribe?: Subscribe1 | null;
};

export const purchaseInteractionSchema: Schema<PurchaseInteraction> = s.object<PurchaseInteraction>({
  buy: s.optionalNullable(s.record(s.string(), s.unknown())),
  rent: s.optionalNullable(s.record(s.string(), s.unknown())),
  subscribe: s.optionalNullable(s.lazy(() => subscribe1Schema)),
});
