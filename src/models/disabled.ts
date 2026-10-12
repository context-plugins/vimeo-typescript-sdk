import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information regarding the current authenticated user's inability to access the user's profile.
 */
export type Disabled = {
  /** The reasons the current authenticated user can't access the user's profile. */
  reasons?: string[];
};

export const disabledSchema: Schema<Disabled> = s.object<Disabled>({
  reasons: s.optional(s.array(s.string())),
});
