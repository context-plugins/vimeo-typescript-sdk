import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MoveVideo = {
  options: string[];
  uri: string;
};

export const moveVideoSchema: Schema<MoveVideo> = s.object<MoveVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
