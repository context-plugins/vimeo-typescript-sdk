import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period2Schema, type Period2 } from "./period2.js";

export type DrmLicensesQuota = {
  available?: number;
  period?: Period2;
  remaining?: number;
  resetDate?: string;
  used?: number;
};

export const drmLicensesQuotaSchema: Schema<DrmLicensesQuota> = s.object<DrmLicensesQuota>({
  available: s.optional(s.number()),
  period: s.optional(s.lazy(() => period2Schema)),
  remaining: s.optional(s.number()),
  resetDate: s.optional(s.string()),
  used: s.optional(s.number()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
