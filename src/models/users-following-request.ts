import { s, type Schema } from "../core/index.js";

export type UsersFollowingRequest = {
  users: string[];
};

export const usersFollowingRequestSchema: Schema<UsersFollowingRequest> = s.object<UsersFollowingRequest>({
  users: s.array(s.string()),
});
