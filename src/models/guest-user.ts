import { s, type Schema } from "../core/index.js";

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
