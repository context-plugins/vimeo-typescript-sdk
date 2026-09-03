import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Groups2 = {
  options: string[];
  uri: string;
};

export const groups2Schema: Schema<Groups2> = s.object<Groups2>({
  options: s.array(s.string()),
  uri: s.string(),
});
