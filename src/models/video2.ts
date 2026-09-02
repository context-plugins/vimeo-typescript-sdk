import { s, type Schema } from "../core/index.js";

export type Video2 = {
  options: string[];
  uri: string;
};

export const video2Schema: Schema<Video2> = s.object<Video2>({
  options: s.array(s.string()),
  uri: s.string(),
});
