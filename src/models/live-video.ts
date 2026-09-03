import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveVideo = {
  options: string[];
  status: "streaming";
  uri: string;
};

export const liveVideoSchema: Schema<LiveVideo> = s.object<LiveVideo>({
  options: s.array(s.string()),
  status: s.literal("streaming"),
  uri: s.string(),
});
