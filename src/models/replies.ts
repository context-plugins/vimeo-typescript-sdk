import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
