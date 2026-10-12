import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom4 = {
  /** Whether to show the custom logo on the embed player. */
  active?: boolean;
  /** The URL that loads when the user clicks the custom logo. */
  link?: string;
  /**
   * Whether to show the custom logo persistently (`true`) or hide it with the rest of the UI
   * (`false`).
   */
  sticky?: boolean;
};

export const custom4Schema: Schema<Custom4> = s.object<Custom4>({
  active: s.optional(s.boolean()),
  link: s.optional(s.string()),
  sticky: s.optional(s.boolean()),
});
