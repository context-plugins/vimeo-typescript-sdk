import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Following = {
  options: string[];
  total: number;
  uri: string;
};

export const followingSchema: Schema<Following> = s.object<Following>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
