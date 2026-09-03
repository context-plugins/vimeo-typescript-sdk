import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quotaPeriodSchema, type QuotaPeriod } from "./quota-period.js";

export type Bandwidth1 = {
  periodicQuota: string | null;
  quotaPeriod: QuotaPeriod;
};

export const bandwidth1Schema: Schema<Bandwidth1> = s.object<Bandwidth1>({
  periodicQuota: s.nullable(s.string()),
  quotaPeriod: quotaPeriodSchema,
  _keysMap: {
    periodicQuota: "periodic_quota",
    quotaPeriod: "quota_period",
  },
});
