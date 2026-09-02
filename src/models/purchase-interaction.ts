import { s, type Schema } from "../core/index.js";
import { subscribe1Schema, type Subscribe1 } from "./subscribe1.js";

export type PurchaseInteraction = {
  buy?: Record<string, unknown> | null;
  rent?: Record<string, unknown> | null;
  subscribe?: Subscribe1 | null;
};

export const purchaseInteractionSchema: Schema<PurchaseInteraction> = s.object<PurchaseInteraction>({
  buy: s.optionalNullable(s.record(s.string(), s.unknown())),
  rent: s.optionalNullable(s.record(s.string(), s.unknown())),
  subscribe: s.optionalNullable(s.lazy(() => subscribe1Schema)),
});
