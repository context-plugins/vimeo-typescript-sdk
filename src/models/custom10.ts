import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom10 = {
  /** Whether to show the active custom logo on the embeddable player. */
  active?: boolean;
  /** The URL that loads when the user clicks the custom logo. */
  link?: string;
  /**
   * Whether the custom logo is always visible on the embeddable player (`true`) or whether the logo
   * appears and disappears with the rest of the UI (`false`).
   */
  sticky?: boolean;
};

export const custom10Schema: Schema<Custom10> = s.object<Custom10>({
  active: s.optional(s.boolean()),
  link: s.optional(s.string()),
  sticky: s.optional(s.boolean()),
});
