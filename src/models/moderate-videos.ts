import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModerateVideos = {
  options: string[];
  uri: string;
};

export const moderateVideosSchema: Schema<ModerateVideos> = s.object<ModerateVideos>({
  options: s.array(s.string()),
  uri: s.string(),
});
