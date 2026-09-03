import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Delete = {
  options: string[];
  uri: string;
};

export const deleteSchema: Schema<Delete> = s.object<Delete>({
  options: s.array(s.string()),
  uri: s.string(),
});
