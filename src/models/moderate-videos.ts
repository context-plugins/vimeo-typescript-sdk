import { s, type Schema } from "../core/index.js";

export type ModerateVideos = {
  options: string[];
  uri: string;
};

export const moderateVideosSchema: Schema<ModerateVideos> = s.object<ModerateVideos>({
  options: s.array(s.string()),
  uri: s.string(),
});
