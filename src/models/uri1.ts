import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the URIs associated with the promotion. */
export type Uri1 = {
  /** The URI of the annual promotion. */
  annual?: string;
  /** The URI of the monthly promotion. */
  monthly?: string;
};

export const uri1Schema: Schema<Uri1> = s.object<Uri1>({
  annual: s.optional(s.string()),
  monthly: s.optional(s.string()),
});
