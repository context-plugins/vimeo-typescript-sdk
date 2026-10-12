import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersPicturesRequest = {
  /** Whether the picture is the authenticated user's active portrait. */
  active?: boolean;
};

export const usersPicturesRequestSchema: Schema<UsersPicturesRequest> = s.object<UsersPicturesRequest>({
  active: s.optional(s.boolean()),
});
