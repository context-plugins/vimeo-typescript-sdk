import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";
import { status19Schema, type Status19 } from "./status19.js";

export type Subscription = {
  /** The ID of the account. */
  accountId: string;
  /** Whether the subscription is set to renew automatically. */
  autoRenew: boolean;
  /**
   * Whether the user can extend their subscription's expiration date by an additional billing
   * period for the same product tier.
   */
  canRenewNow: boolean;
  /** The time in ISO 8601 format when the subscription was created. */
  createdAt: string;
  /** The time in ISO 8601 format when the subscription was disabled. */
  disabledAt?: string;
  /** The time in ISO 8601 format when the subscription ended. */
  endDate: string;
  /** The ID of the grace period. */
  gracePeriodId?: string;
  /** The ID of the subscription. */
  id: string;
  /** Whether the subscription is the latest version. */
  isLatest: boolean;
  /** The ID of the payment method. */
  paymentMethodId: string;
  /** An array of plans in the subscription. */
  plans: Plan[];
  /** The time in ISO 8601 format when the subscription started. */
  startDate: string;
  /**
   * The status of the subscription.
   *
   * Option descriptions:
   *  * `SUBSCRIPTION_STATUS_ACTIVE` - The subscription is active.
   *  * `SUBSCRIPTION_STATUS_CANCELLED` - The subscription is canceled.
   *  * `SUBSCRIPTION_STATUS_DRAFT` - The subscription is a draft.
   *  * `SUBSCRIPTION_STATUS_EXPIRED` - The subscription is expired.
   *  * `SUBSCRIPTION_STATUS_PAUSED` - The subscription is paused.
   *  * `SUBSCRIPTION_STATUS_PENDING_ACCEPTANCE` - The subscription is pending acceptance.
   *  * `SUBSCRIPTION_STATUS_PENDING_ACTIVATION` - The subscription is pending activation.
   *  * `SUBSCRIPTION_STATUS_UNSPECIFIED` - The subscription status is unspecified.
   */
  status: Status19;
  /** The number of the subscription. */
  subscriptionNumber: string;
  /** The version of the subscription. */
  subscriptionVersion: number;
  /** The time in ISO 8601 format when the subscription was updated. */
  updatedAt: string;
  /** The vendor of the subscription. */
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
  subscriptionVersion: s.float64(),
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
