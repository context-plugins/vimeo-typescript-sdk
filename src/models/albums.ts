import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Albums = {
  options: string[];
  total: number;
  uri: string;
};

export const albumsSchema: Schema<Albums> = s.object<Albums>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
