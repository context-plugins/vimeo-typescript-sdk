import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos12 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos12Schema: Schema<Videos12> = s.object<Videos12>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
