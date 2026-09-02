import { s, type Schema } from "../core/index.js";

export type WatchedVideos = {
  options?: string[];
  total?: number;
  uri?: string;
};

export const watchedVideosSchema: Schema<WatchedVideos> = s.object<WatchedVideos>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
