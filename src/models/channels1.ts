import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Channels1 = {
  options: string[];
  total: number;
  uri: string;
};

export const channels1Schema: Schema<Channels1> = s.object<Channels1>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
