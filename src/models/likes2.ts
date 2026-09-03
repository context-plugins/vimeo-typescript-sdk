import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Likes2 = {
  options: string[];
  total: number;
  uri: string;
};

export const likes2Schema: Schema<Likes2> = s.object<Likes2>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
