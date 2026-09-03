import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Feed = {
  options: string[];
  uri: string;
};

export const feedSchema: Schema<Feed> = s.object<Feed>({
  options: s.array(s.string()),
  uri: s.string(),
});
