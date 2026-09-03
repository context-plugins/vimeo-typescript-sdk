import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status16 = {
  SubscriptionStatusActive: "SUBSCRIPTION_STATUS_ACTIVE",
  SubscriptionStatusCancelled: "SUBSCRIPTION_STATUS_CANCELLED",
  SubscriptionStatusDraft: "SUBSCRIPTION_STATUS_DRAFT",
  SubscriptionStatusExpired: "SUBSCRIPTION_STATUS_EXPIRED",
  SubscriptionStatusPaused: "SUBSCRIPTION_STATUS_PAUSED",
  SubscriptionStatusPendingAcceptance: "SUBSCRIPTION_STATUS_PENDING_ACCEPTANCE",
  SubscriptionStatusPendingActivation: "SUBSCRIPTION_STATUS_PENDING_ACTIVATION",
  SubscriptionStatusUnspecified: "SUBSCRIPTION_STATUS_UNSPECIFIED",
} as const;
export type Status16 = (typeof Status16)[keyof typeof Status16] | (string & {});

export const status16Schema: EnumSchema<Status16> = s.enumOf<Status16>(Status16);
