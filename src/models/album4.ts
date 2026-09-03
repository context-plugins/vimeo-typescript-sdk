import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Album4 = {
  options: string[];
  uri: string;
};

export const album4Schema: Schema<Album4> = s.object<Album4>({
  options: s.array(s.string()),
  uri: s.string(),
});
