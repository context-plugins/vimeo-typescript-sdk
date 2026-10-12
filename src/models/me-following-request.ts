import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeFollowingRequest = {
  /** An array of user IDs for the authenticated user to follow. */
  users: string[];
};

export const meFollowingRequestSchema: Schema<MeFollowingRequest> = s.object<MeFollowingRequest>({
  users: s.array(s.string()),
});
