import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersVideosCopyRequest = {
  name?: string;
};

export const usersVideosCopyRequestSchema: Schema<UsersVideosCopyRequest> = s.object<UsersVideosCopyRequest>({
  name: s.optional(s.string()),
});
