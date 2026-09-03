import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GuestUser = {
  name: string;
  options?: string[];
  uri: string;
};

export const guestUserSchema: Schema<GuestUser> = s.object<GuestUser>({
  name: s.string(),
  options: s.optional(s.array(s.string())),
  uri: s.string(),
});
