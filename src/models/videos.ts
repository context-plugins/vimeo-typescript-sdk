import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos = {
  options: string[];
  total: number;
  uri: string;
};

export const videosSchema: Schema<Videos> = s.object<Videos>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
