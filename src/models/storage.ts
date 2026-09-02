import { s, type Schema } from "../core/index.js";
import { quotaPeriod1Schema, type QuotaPeriod1 } from "./quota-period1.js";
import { quotaUnitSchema, type QuotaUnit } from "./quota-unit.js";

export type Storage = {
  periodicQuota: string | null;
  quotaCap: string | null;
  quotaPeriod: QuotaPeriod1;
  quotaUnit: QuotaUnit;
};

export const storageSchema: Schema<Storage> = s.object<Storage>({
  periodicQuota: s.nullable(s.string()),
  quotaCap: s.nullable(s.string()),
  quotaPeriod: quotaPeriod1Schema,
  quotaUnit: quotaUnitSchema,
  _keysMap: {
    periodicQuota: "periodic_quota",
    quotaCap: "quota_cap",
    quotaPeriod: "quota_period",
    quotaUnit: "quota_unit",
  },
});
