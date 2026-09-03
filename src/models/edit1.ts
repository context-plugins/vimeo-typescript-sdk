import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Edit1 = {
  options: string[];
  uri: string;
};

export const edit1Schema: Schema<Edit1> = s.object<Edit1>({
  options: s.array(s.string()),
  uri: s.string(),
});
