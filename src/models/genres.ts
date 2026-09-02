import { s, type Schema } from "../core/index.js";

export type Genres = {
  options: string[];
  total: number;
  uri: string;
};

export const genresSchema: Schema<Genres> = s.object<Genres>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
