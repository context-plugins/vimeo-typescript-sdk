import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddLogos = {
  options: string[];
  uri: string;
};

export const addLogosSchema: Schema<AddLogos> = s.object<AddLogos>({
  options: s.array(s.string()),
  uri: s.string(),
});
