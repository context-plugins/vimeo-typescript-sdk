import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Channel1 = {
  options: string[];
  uri: string;
};

export const channel1Schema: Schema<Channel1> = s.object<Channel1>({
  options: s.array(s.string()),
  uri: s.string(),
});
