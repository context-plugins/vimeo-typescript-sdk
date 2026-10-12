import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the user privacy of the video, if the video privacy setting is `users`. */
export type UsersWithAccess = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The total number of users on this connection. */
  total?: number;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const usersWithAccessSchema: Schema<UsersWithAccess> = s.object<UsersWithAccess>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
