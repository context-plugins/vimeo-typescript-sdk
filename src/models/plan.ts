import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { items1Schema, type Items1 } from "./items1.js";
import { moneySchema, type Money } from "./money.js";

export type Plan = {
  /** The amount of the plan. */
  amount?: Money;
  /** The ID of the billing plan. */
  billingPlanId?: string;
  /** The ID of the billing plan product. */
  billingPlanProductId?: string;
  /** The type of the billing plan. */
  billingPlanType?: string;
  /** The time in 8601 format when the plan was created. */
  createdAt: string;
  /** The ID of the plan. */
  id: string;
  /** An array of items in the plan. */
  items: Items1[];
  /** The metadata of the plan. */
  metadata?: Record<string, unknown>;
  /** The ID of the plan. */
  planId: string;
  /** The ID of the product. */
  productId: string;
  /** The promotional code. */
  promoCode?: string;
  /** The ID of the promotional code. */
  promoCodeId?: string;
  /** The quantity of the plan. */
  quantity?: number;
  /** The ID of the subscription plan. */
  subscriptionPlanId: string;
  /** The number of the subscription plan. */
  subscriptionPlanNumber: string;
  /** The type of the subscription plan. */
  subscriptionPlanType: string;
  /** The time in 8601 format when the plan was synced. */
  syncedAt: string;
  /** The time in 8601 format when the plan was updated. */
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
  quantity: s.optional(s.float64()),
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
