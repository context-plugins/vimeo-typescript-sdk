import { s, type Schema } from "../core/index.js";

export type Language = {
  code: string;
  name: string;
};

export const languageSchema: Schema<Language> = s.object<Language>({
  code: s.string(),
  name: s.string(),
});
