import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Status19 = {
  SubscriptionStatusActive: "SUBSCRIPTION_STATUS_ACTIVE",
  SubscriptionStatusCancelled: "SUBSCRIPTION_STATUS_CANCELLED",
  SubscriptionStatusDraft: "SUBSCRIPTION_STATUS_DRAFT",
  SubscriptionStatusExpired: "SUBSCRIPTION_STATUS_EXPIRED",
  SubscriptionStatusPaused: "SUBSCRIPTION_STATUS_PAUSED",
  SubscriptionStatusPendingAcceptance: "SUBSCRIPTION_STATUS_PENDING_ACCEPTANCE",
  SubscriptionStatusPendingActivation: "SUBSCRIPTION_STATUS_PENDING_ACTIVATION",
  SubscriptionStatusUnspecified: "SUBSCRIPTION_STATUS_UNSPECIFIED",
} as const;
export type Status19 = (typeof Status19)[keyof typeof Status19] | (string & {});

export const status19Schema: EnumSchema<Status19> = s.enumOf<Status19>(Status19);
