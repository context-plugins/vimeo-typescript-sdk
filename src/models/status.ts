import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The billing status of the subscription.
 *
 * Option descriptions:
 *  * `active` - The subscription is in good standing and will renew automatically on the renewal
 *    date.
 *  * `cancelled` - The subscription is or will become inactive on the expiration date and won't
 *    renew automatically.
 *  * `grace_period` - The subscription has passed the expiration date but is still active. The
 *    automatic renewal charge is being retried.
 *  * `none` - The subscription doesn't exist. A subscription in this state can be considered as
 *    erroring.
 *  * `on_hold` - The subscription's automatic renewal payment has failed, and the grace period has
 *    expired.
 *  * `pending` - The status of the subscription is pending. A subscription in this state can be
 *    considered as erroring.
 */
export const Status = {
  Active: "active",
  Cancelled: "cancelled",
  GracePeriod: "grace_period",
  None: "none",
  OnHold: "on_hold",
  Pending: "pending",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
