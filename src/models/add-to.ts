import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddTo = {
  options: string[];
  uri: string;
};

export const addToSchema: Schema<AddTo> = s.object<AddTo>({
  options: s.array(s.string()),
  uri: s.string(),
});
