import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period2Schema, type Period2 } from "./period2.js";

/** Information about the user's DRM usage quota. */
export type DrmLicensesQuota = {
  /** The maximum number of DRM sessions granted to the authenticated user. */
  available?: number;
  /**
   * The time period for which the DRM usage activity is evaluated.
   *
   * Option descriptions:
   *  * `lifetime` - The quota period is for the lifetime of the account.
   *  * `year` - The quota period is one year.
   */
  period?: Period2;
  /** The number of DRM sessions that are remaining for the authenticated user. */
  remaining?: number;
  /** The date of the user's next DRM sessions reset. */
  resetDate?: string;
  /** The number of DRM sessions that have been consumed. */
  used?: number;
};

export const drmLicensesQuotaSchema: Schema<DrmLicensesQuota> = s.object<DrmLicensesQuota>({
  available: s.optional(s.float64()),
  period: s.optional(s.lazy(() => period2Schema)),
  remaining: s.optional(s.float64()),
  resetDate: s.optional(s.string()),
  used: s.optional(s.float64()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
