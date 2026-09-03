import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos1 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos1Schema: Schema<Videos1> = s.object<Videos1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
