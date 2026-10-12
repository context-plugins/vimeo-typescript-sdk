import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disabledSchema, type Disabled } from "./disabled.js";

/** Information about the user's profile. */
export type ViewProfile = {
  /**
   * Information regarding the current authenticated user's inability to access the user's profile.
   */
  disabled?: Disabled;
  /**
   * Whether the current authenticated user can access the user's profile with a moderator override.
   */
  modOverride?: boolean;
  /** An array of HTTP methods permitted on this URI for the current authenticated user. */
  options?: string[];
  /** The API URI that resolves to the user's profile. */
  uri?: string;
};

export const viewProfileSchema: Schema<ViewProfile> = s.object<ViewProfile>({
  disabled: s.optional(s.lazy(() => disabledSchema)),
  modOverride: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
  _keysMap: {
    modOverride: "mod_override",
  },
});
