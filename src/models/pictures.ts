import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pictures = {
  options: string[];
  total: number;
  uri: string;
};

export const picturesSchema: Schema<Pictures> = s.object<Pictures>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
