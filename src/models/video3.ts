import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Video3 = {
  options: string[];
  total: number;
  uri: string;
};

export const video3Schema: Schema<Video3> = s.object<Video3>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
