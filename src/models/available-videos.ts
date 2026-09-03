import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AvailableVideos = {
  options: string[];
  total: number;
  uri: string;
};

export const availableVideosSchema: Schema<AvailableVideos> = s.object<AvailableVideos>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
