import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PublicVideos = {
  /** The total number of public videos that the authenticated user has uploaded. */
  total: number;
};

export const publicVideosSchema: Schema<PublicVideos> = s.object<PublicVideos>({
  total: s.float64(),
});
