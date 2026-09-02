import { s, type Schema } from "../core/index.js";

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
