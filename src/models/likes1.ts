import { s, type Schema } from "../core/index.js";

export type Likes1 = {
  options: string[];
  total: number;
  uri: string;
};

export const likes1Schema: Schema<Likes1> = s.object<Likes1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
