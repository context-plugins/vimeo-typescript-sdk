import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The language of the audio track. */
export type Language2 = {
  /** The standard ISO 639-1 code for the language. */
  code: string;
  /** The name of the language. */
  name: string;
};

export const language2Schema: Schema<Language2> = s.object<Language2>({
  code: s.string(),
  name: s.string(),
});
