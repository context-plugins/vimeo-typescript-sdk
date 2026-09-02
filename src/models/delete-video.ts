import { s, type Schema } from "../core/index.js";

export type DeleteVideo = {
  options: string[];
  uri: string;
};

export const deleteVideoSchema: Schema<DeleteVideo> = s.object<DeleteVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
