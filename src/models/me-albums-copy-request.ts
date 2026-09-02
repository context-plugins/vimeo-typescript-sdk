import { s, type Schema } from "../core/index.js";

export type MeAlbumsCopyRequest = {
  name?: string;
};

export const meAlbumsCopyRequestSchema: Schema<MeAlbumsCopyRequest> = s.object<MeAlbumsCopyRequest>({
  name: s.optional(s.string()),
});
