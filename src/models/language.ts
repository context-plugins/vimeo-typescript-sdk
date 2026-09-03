import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Language = {
  code: string;
  name: string;
};

export const languageSchema: Schema<Language> = s.object<Language>({
  code: s.string(),
  name: s.string(),
});
