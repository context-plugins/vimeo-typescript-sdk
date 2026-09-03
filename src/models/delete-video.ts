import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteVideo = {
  options: string[];
  uri: string;
};

export const deleteVideoSchema: Schema<DeleteVideo> = s.object<DeleteVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
