import { s, type EnumSchema } from "../core/index.js";

export const QuotaUnit = {
  VideoCount: "video_count",
  VideoSize: "video_size",
} as const;
export type QuotaUnit = (typeof QuotaUnit)[keyof typeof QuotaUnit] | (string & {});

export const quotaUnitSchema: EnumSchema<QuotaUnit> = s.enumOf<QuotaUnit>(QuotaUnit);
