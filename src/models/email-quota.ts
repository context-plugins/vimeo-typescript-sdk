import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmailQuota = {
  capping: number;
  total: number;
};

export const emailQuotaSchema: Schema<EmailQuota> = s.object<EmailQuota>({
  capping: s.number(),
  total: s.number(),
});
