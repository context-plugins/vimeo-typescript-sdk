import { s, type Schema } from "../core/index.js";

export type Uri1 = {
  annual?: string;
  monthly?: string;
};

export const uri1Schema: Schema<Uri1> = s.object<Uri1>({
  annual: s.optional(s.string()),
  monthly: s.optional(s.string()),
});
