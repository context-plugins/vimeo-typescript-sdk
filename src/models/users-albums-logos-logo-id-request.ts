import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsLogosLogoIdRequest = {
  /** Whether to make this image the active showcase logo. */
  active?: boolean;
};

export const usersAlbumsLogosLogoIdRequestSchema: Schema<UsersAlbumsLogosLogoIdRequest> =
  s.object<UsersAlbumsLogosLogoIdRequest>({
    active: s.optional(s.boolean()),
  });
