import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Texttracks = {
  options: string[];
  total: number;
  uri: string;
};

export const texttracksSchema: Schema<Texttracks> = s.object<Texttracks>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
