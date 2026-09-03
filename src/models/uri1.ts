import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Uri1 = {
  annual?: string;
  monthly?: string;
};

export const uri1Schema: Schema<Uri1> = s.object<Uri1>({
  annual: s.optional(s.string()),
  monthly: s.optional(s.string()),
});
