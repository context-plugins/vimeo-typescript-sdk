import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos2 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos2Schema: Schema<Videos2> = s.object<Videos2>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
