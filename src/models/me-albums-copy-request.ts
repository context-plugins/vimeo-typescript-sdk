import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsCopyRequest = {
  name?: string;
};

export const meAlbumsCopyRequestSchema: Schema<MeAlbumsCopyRequest> = s.object<MeAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
