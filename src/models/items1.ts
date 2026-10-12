import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Items1 = {
  /** The amount of the item. */
  amount: Record<string, unknown>[];
  /** The time in 8601 format when the item was created. */
  createdAt: string;
  /** The time in 8601 format when the item ended. */
  endDate?: string;
  /** The ID of the item. */
  id: string;
  /** The metadata of the item. */
  metadata?: Record<string, unknown>;
  /** The ID of the price. */
  priceId: string;
  /** The quantity of the item. */
  quantity: number;
  /** The time in 8601 format when the item started. */
  startDate?: string;
  /** The ID of the subscription item. */
  subscriptionItemId: string;
  /** The number of the subscription item. */
  subscriptionItemNumber: string;
  /** The ID of the subscription plan. */
  subscriptionPlanId: string;
  /** The time in 8601 format when the item was synced. */
  syncedAt: string;
  /** The time in 8601 format when the item was updated. */
  updatedAt: string;
};

export const items1Schema: Schema<Items1> = s.object<Items1>({
  amount: s.array(s.record(s.string(), s.unknown())),
  createdAt: s.string(),
  endDate: s.optional(s.string()),
  id: s.string(),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  priceId: s.string(),
  quantity: s.float64(),
  startDate: s.optional(s.string()),
  subscriptionItemId: s.string(),
  subscriptionItemNumber: s.string(),
  subscriptionPlanId: s.string(),
  syncedAt: s.string(),
  updatedAt: s.string(),
  _keysMap: {
    createdAt: "created_at",
    endDate: "end_date",
    priceId: "price_id",
    startDate: "start_date",
    subscriptionItemId: "subscription_item_id",
    subscriptionItemNumber: "subscription_item_number",
    subscriptionPlanId: "subscription_plan_id",
    syncedAt: "synced_at",
    updatedAt: "updated_at",
  },
});
