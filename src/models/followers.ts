import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
