import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeAlbumsVideosRequest = {
  /** A comma-separated list of video URIs corresponding to the videos to add. */
  videos: string;
};

export const meAlbumsVideosRequestSchema: Schema<MeAlbumsVideosRequest> = s.object<MeAlbumsVideosRequest>({
  videos: s.string(),
});
