import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersAlbumsCopyRequest = {
  /**
   * The copied showcase name. By default, this becomes the source showcase name with (Copy)
   * appended.
   */
  name?: string;
};

export const usersAlbumsCopyRequestSchema: Schema<UsersAlbumsCopyRequest> = s.object<UsersAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
