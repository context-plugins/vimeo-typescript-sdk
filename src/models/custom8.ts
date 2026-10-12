import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom8 = {
  /** Whether to show the active custom logo on the embeddable player. */
  active?: boolean;
  /** The ID of the custom logo that appears on the embeddable player. */
  id?: number | null;
  /** The URL that loads when the user clicks the custom logo. */
  link?: string | null;
  /**
   * Whether the custom logo is always visible on the embeddable player (`true`) or whether the logo
   * appears and disappears with the rest of the UI (`false`).
   */
  sticky?: boolean;
};

export const custom8Schema: Schema<Custom8> = s.object<Custom8>({
  active: s.optional(s.boolean()),
  id: s.optionalNullable(s.float64()),
  link: s.optionalNullable(s.string()),
  sticky: s.optional(s.boolean()),
});
