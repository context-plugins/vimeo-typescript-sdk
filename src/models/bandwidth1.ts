import { s, type Schema } from "../core/index.js";
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
