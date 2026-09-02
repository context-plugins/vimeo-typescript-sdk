import { s, type Schema } from "../core/index.js";

export type UsersVideosCopyRequest = {
  name?: string;
};

export const usersVideosCopyRequestSchema: Schema<UsersVideosCopyRequest> = s.object<UsersVideosCopyRequest>({
  name: s.optional(s.string()),
});
