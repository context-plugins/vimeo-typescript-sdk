import { s, type Schema } from "../core/index.js";

export type Likes = {
  options: string[];
  total: number;
  uri: string;
};

export const likesSchema: Schema<Likes> = s.object<Likes>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
