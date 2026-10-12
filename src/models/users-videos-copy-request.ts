import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersVideosCopyRequest = {
  /** The copied video name. By default, this becomes the source video name with (Copy) appended. */
  name?: string;
};

export const usersVideosCopyRequestSchema: Schema<UsersVideosCopyRequest> = s.object<UsersVideosCopyRequest>({
  name: s.optional(s.string()),
});
