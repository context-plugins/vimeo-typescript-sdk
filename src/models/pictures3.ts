import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pictures3 = {
  options: string[];
  uri: string;
};

export const pictures3Schema: Schema<Pictures3> = s.object<Pictures3>({
  options: s.array(s.string()),
  uri: s.string(),
});
