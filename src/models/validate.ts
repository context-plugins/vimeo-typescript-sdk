import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Validate = {
  options: string[];
  uri: string;
};

export const validateSchema: Schema<Validate> = s.object<Validate>({
  options: s.array(s.string()),
  uri: s.string(),
});
