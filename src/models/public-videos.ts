import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicVideos = {
  total: number;
};

export const publicVideosSchema: Schema<PublicVideos> = s.object<PublicVideos>({
  total: s.number(),
});
