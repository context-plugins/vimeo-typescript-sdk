import { s, type Schema } from "../core/index.js";
import { reason7Schema, type Reason7 } from "./reason7.js";

export type TextTranslations = {
  disabled: boolean;
  options: string[];
  reason: Reason7 | null;
  uri: string;
};

export const textTranslationsSchema: Schema<TextTranslations> = s.object<TextTranslations>({
  disabled: s.boolean(),
  options: s.array(s.string()),
  reason: s.nullable(s.lazy(() => reason7Schema)),
  uri: s.string(),
});
