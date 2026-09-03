import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Country = {
  code: string;
  name: string;
};

export const countrySchema: Schema<Country> = s.object<Country>({
  code: s.string(),
  name: s.string(),
});
