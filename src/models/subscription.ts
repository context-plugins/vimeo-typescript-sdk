import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";
import { status19Schema, type Status19 } from "./status19.js";

export type Subscription = {
  accountId: string;
  autoRenew: boolean;
  canRenewNow: boolean;
  createdAt: string;
  disabledAt?: string;
  endDate: string;
  gracePeriodId?: string;
  id: string;
  isLatest: boolean;
  paymentMethodId: string;
  plans: Plan[];
  startDate: string;
  status: Status19;
  subscriptionNumber: string;
  subscriptionVersion: number;
  updatedAt: string;
  vendor: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  accountId: s.string(),
  autoRenew: s.boolean(),
  canRenewNow: s.boolean(),
  createdAt: s.string(),
  disabledAt: s.optional(s.string()),
  endDate: s.string(),
  gracePeriodId: s.optional(s.string()),
  id: s.string(),
  isLatest: s.boolean(),
  paymentMethodId: s.string(),
  plans: s.array(s.lazy(() => planSchema)),
  startDate: s.string(),
  status: status19Schema,
  subscriptionNumber: s.string(),
  subscriptionVersion: s.number(),
  updatedAt: s.string(),
  vendor: s.string(),
  _keysMap: {
    accountId: "account_id",
    autoRenew: "auto_renew",
    canRenewNow: "can_renew_now",
    createdAt: "created_at",
    disabledAt: "disabled_at",
    endDate: "end_date",
    gracePeriodId: "grace_period_id",
    isLatest: "is_latest",
    paymentMethodId: "payment_method_id",
    startDate: "start_date",
    subscriptionNumber: "subscription_number",
    subscriptionVersion: "subscription_version",
    updatedAt: "updated_at",
  },
});
