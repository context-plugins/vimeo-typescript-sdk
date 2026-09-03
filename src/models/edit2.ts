import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Edit2 = {
  options: string[];
  uri: string;
};

export const edit2Schema: Schema<Edit2> = s.object<Edit2>({
  options: s.array(s.string()),
  uri: s.string(),
});
