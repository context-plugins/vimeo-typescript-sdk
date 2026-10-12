import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsCopyRequest = {
  /**
   * The copied showcase name. By default, this becomes the source showcase name with (Copy)
   * appended.
   */
  name?: string;
};

export const meAlbumsCopyRequestSchema: Schema<MeAlbumsCopyRequest> = s.object<MeAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
