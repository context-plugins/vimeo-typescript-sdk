import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's next renewal. */
export type Renewal = {
  /**
   * The date in YYYY-MM-DD format when the authenticated user's membership renews (or expires, if
   * they have disabled automatic renewal, or the trial ends without renewal in case of a Reverse
   * trial). This value is for display only; the exact time at which renewal or expiration occurs on
   * this date isn't guaranteed.
   */
  displayDate: string;
};

export const renewalSchema: Schema<Renewal> = s.object<Renewal>({
  displayDate: s.string(),
  _keysMap: {
    displayDate: "display_date",
  },
});
