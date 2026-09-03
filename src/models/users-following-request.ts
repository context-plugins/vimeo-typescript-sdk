import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersFollowingRequest = {
  users: string[];
};

export const usersFollowingRequestSchema: Schema<UsersFollowingRequest> = s.object<UsersFollowingRequest>({
  users: s.array(s.string()),
});
