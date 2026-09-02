import { s, type Schema } from "../core/index.js";

export type UsersAlbumsCopyRequest = {
  name?: string;
};

export const usersAlbumsCopyRequestSchema: Schema<UsersAlbumsCopyRequest> = s.object<UsersAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
