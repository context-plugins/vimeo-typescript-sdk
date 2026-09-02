import { s, type Schema } from "../core/index.js";

export type Items1 = {
  amount: Record<string, unknown>[];
  createdAt: string;
  endDate?: string;
  id: string;
  metadata?: Record<string, unknown>;
  priceId: string;
  quantity: number;
  startDate?: string;
  subscriptionItemId: string;
  subscriptionItemNumber: string;
  subscriptionPlanId: string;
  syncedAt: string;
  updatedAt: string;
};

export const items1Schema: Schema<Items1> = s.object<Items1>({
  amount: s.array(s.record(s.string(), s.unknown())),
  createdAt: s.string(),
  endDate: s.optional(s.string()),
  id: s.string(),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  priceId: s.string(),
  quantity: s.number(),
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
