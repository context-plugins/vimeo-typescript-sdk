import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the event owner's email quota. */
export type EmailQuota = {
  /** The maximum number of entity emails that the user can send. */
  capping: number;
  /** The current number of entity emails that the user has sent. */
  total: number;
};

export const emailQuotaSchema: Schema<EmailQuota> = s.object<EmailQuota>({
  capping: s.float64(),
  total: s.float64(),
});
