import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The SKUs of the plans. */
export type Id = {
  /** The SKU of the annual plan. */
  annual: string | null;
  /** The SKU of the monthly plan. */
  monthly: string | null;
};

export const idSchema: Schema<Id> = s.object<Id>({
  annual: s.nullable(s.string()),
  monthly: s.nullable(s.string()),
});
