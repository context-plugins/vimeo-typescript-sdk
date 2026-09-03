import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddVideos = {
  options: string[];
  uri: string;
};

export const addVideosSchema: Schema<AddVideos> = s.object<AddVideos>({
  options: s.array(s.string()),
  uri: s.string(),
});
