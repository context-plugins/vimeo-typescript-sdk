import { s, type Schema } from "../core/index.js";

export type MoveVideo = {
  options: string[];
  uri: string;
};

export const moveVideoSchema: Schema<MoveVideo> = s.object<MoveVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
