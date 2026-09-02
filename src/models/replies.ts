import { s, type Schema } from "../core/index.js";

export type Replies = {
  options: string[];
  total: number;
  uri: string;
};

export const repliesSchema: Schema<Replies> = s.object<Replies>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
