import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

/** Information about the authenticated user's trial. */
export type Trial = {
  /**
   * Whether the authenticated user has been in (or is currently in) a free trial. The user might
   * not be eligible for a free trial even when the value of this field is `false`.
   */
  hasBeenInFreeTrial: boolean;
  /**
   * Whether the user is currently in a Reverse free trial. Reverse trials are no-card trials
   * granted before purchase and have no PaymentsService subscription backing them; for these users,
   * `subscription.renewal.renewal_date` carries the trial-expiry datetime instead of a next-charge
   * datetime.
   */
  isReverseFreeTrial: boolean;
  /**
   * The status of the authenticated user's trial.
   *
   * Option descriptions:
   *  * `free_trial` - The user is currently in a free trial.
   */
  status: Status1 | null;
};

export const trialSchema: Schema<Trial> = s.object<Trial>({
  hasBeenInFreeTrial: s.boolean(),
  isReverseFreeTrial: s.boolean(),
  status: s.nullable(s.lazy(() => status1Schema)),
  _keysMap: {
    hasBeenInFreeTrial: "has_been_in_free_trial",
    isReverseFreeTrial: "is_reverse_free_trial",
  },
});
