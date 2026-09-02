import { s, type Schema } from "../core/index.js";

export type Followers = {
  options: string[];
  total: number;
  uri: string;
};

export const followersSchema: Schema<Followers> = s.object<Followers>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
