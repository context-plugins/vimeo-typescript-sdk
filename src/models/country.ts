import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Country = {
  /**
   * The country code in ISO-3166 format.
   *
   * @deprecated
   */
  code: string;
  /**
   * The name of the country.
   *
   * @deprecated
   */
  name: string;
};

export const countrySchema: Schema<Country> = s.object<Country>({
  code: s.string(),
  name: s.string(),
});
