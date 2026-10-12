import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Language = {
  /** The standard ISO 639-1 code for the language. */
  code: string;
  /** The name of the language. */
  name: string;
};

export const languageSchema: Schema<Language> = s.object<Language>({
  code: s.string(),
  name: s.string(),
});
