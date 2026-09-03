import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Language2 = {
  code: string;
  name: string;
};

export const language2Schema: Schema<Language2> = s.object<Language2>({
  code: s.string(),
  name: s.string(),
});
