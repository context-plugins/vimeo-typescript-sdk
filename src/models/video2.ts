import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Video2 = {
  options: string[];
  uri: string;
};

export const video2Schema: Schema<Video2> = s.object<Video2>({
  options: s.array(s.string()),
  uri: s.string(),
});
