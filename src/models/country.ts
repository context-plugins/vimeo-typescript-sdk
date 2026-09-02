import { s, type Schema } from "../core/index.js";

export type Country = {
  code: string;
  name: string;
};

export const countrySchema: Schema<Country> = s.object<Country>({
  code: s.string(),
  name: s.string(),
});
