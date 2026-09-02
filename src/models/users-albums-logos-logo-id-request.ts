import { s, type Schema } from "../core/index.js";

export type UsersAlbumsLogosLogoIdRequest = {
  active?: boolean;
};

export const usersAlbumsLogosLogoIdRequestSchema: Schema<UsersAlbumsLogosLogoIdRequest> =
  s.object<UsersAlbumsLogosLogoIdRequest>({
    active: s.optional(s.boolean()),
  });
