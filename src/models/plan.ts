import { s, type Schema } from "../core/index.js";
import { items1Schema, type Items1 } from "./items1.js";
import { moneySchema, type Money } from "./money.js";

export type Plan = {
  amount?: Money;
  billingPlanId?: string;
  billingPlanProductId?: string;
  billingPlanType?: string;
  createdAt: string;
  id: string;
  items: Items1[];
  metadata?: Record<string, unknown>;
  planId: string;
  productId: string;
  promoCode?: string;
  promoCodeId?: string;
  quantity?: number;
  subscriptionPlanId: string;
  subscriptionPlanNumber: string;
  subscriptionPlanType: string;
  syncedAt: string;
  updatedAt: string;
};

export const planSchema: Schema<Plan> = s.object<Plan>({
  amount: s.optional(s.lazy(() => moneySchema)),
  billingPlanId: s.optional(s.string()),
  billingPlanProductId: s.optional(s.string()),
  billingPlanType: s.optional(s.string()),
  createdAt: s.string(),
  id: s.string(),
  items: s.array(s.lazy(() => items1Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  planId: s.string(),
  productId: s.string(),
  promoCode: s.optional(s.string()),
  promoCodeId: s.optional(s.string()),
  quantity: s.optional(s.number()),
  subscriptionPlanId: s.string(),
  subscriptionPlanNumber: s.string(),
  subscriptionPlanType: s.string(),
  syncedAt: s.string(),
  updatedAt: s.string(),
  _keysMap: {
    billingPlanId: "billing_plan_id",
    billingPlanProductId: "billing_plan_product_id",
    billingPlanType: "billing_plan_type",
    createdAt: "created_at",
    planId: "plan_id",
    productId: "product_id",
    promoCode: "promo_code",
    promoCodeId: "promo_code_id",
    subscriptionPlanId: "subscription_plan_id",
    subscriptionPlanNumber: "subscription_plan_number",
    subscriptionPlanType: "subscription_plan_type",
    syncedAt: "synced_at",
    updatedAt: "updated_at",
  },
});
