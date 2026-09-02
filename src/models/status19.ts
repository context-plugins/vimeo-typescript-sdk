import { s, type EnumSchema } from "../core/index.js";

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
