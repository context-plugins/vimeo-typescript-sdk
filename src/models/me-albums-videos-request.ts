import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsVideosRequest = {
  videos: string;
};

export const meAlbumsVideosRequestSchema: Schema<MeAlbumsVideosRequest> = s.object<MeAlbumsVideosRequest>({
  videos: s.string(),
});
