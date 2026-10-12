import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the guest user who posted the comment. */
export type GuestUser = {
  /** The display name of the guest user who posted the comment. */
  name: string;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The unique identifier to access the guest user resource. */
  uri: string;
};

export const guestUserSchema: Schema<GuestUser> = s.object<GuestUser>({
  name: s.string(),
  options: s.optional(s.array(s.string())),
  uri: s.string(),
});
