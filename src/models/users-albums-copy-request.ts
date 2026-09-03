import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsCopyRequest = {
  name?: string;
};

export const usersAlbumsCopyRequestSchema: Schema<UsersAlbumsCopyRequest> = s.object<UsersAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
