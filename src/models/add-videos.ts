import { s, type Schema } from "../core/index.js";

export type AddVideos = {
  options: string[];
  uri: string;
};

export const addVideosSchema: Schema<AddVideos> = s.object<AddVideos>({
  options: s.array(s.string()),
  uri: s.string(),
});
