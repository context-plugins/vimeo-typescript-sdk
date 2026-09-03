import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos14 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos14Schema: Schema<Videos14> = s.object<Videos14>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
