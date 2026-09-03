import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom4 = {
  active?: boolean;
  link?: string;
  sticky?: boolean;
};

export const custom4Schema: Schema<Custom4> = s.object<Custom4>({
  active: s.optional(s.boolean()),
  link: s.optional(s.string()),
  sticky: s.optional(s.boolean()),
});
