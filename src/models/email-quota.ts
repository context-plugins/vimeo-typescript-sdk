import { s, type Schema } from "../core/index.js";

export type EmailQuota = {
  capping: number;
  total: number;
};

export const emailQuotaSchema: Schema<EmailQuota> = s.object<EmailQuota>({
  capping: s.number(),
  total: s.number(),
});
