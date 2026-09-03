import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos3 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos3Schema: Schema<Videos3> = s.object<Videos3>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
