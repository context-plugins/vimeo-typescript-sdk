import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersFollowingRequest = {
  /** An array of user IDs for the authenticated user to follow. */
  users: string[];
};

export const usersFollowingRequestSchema: Schema<UsersFollowingRequest> = s.object<UsersFollowingRequest>({
  users: s.array(s.string()),
});
