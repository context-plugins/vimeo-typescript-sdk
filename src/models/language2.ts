import { s, type Schema } from "../core/index.js";

export type Language2 = {
  code: string;
  name: string;
};

export const language2Schema: Schema<Language2> = s.object<Language2>({
  code: s.string(),
  name: s.string(),
});
