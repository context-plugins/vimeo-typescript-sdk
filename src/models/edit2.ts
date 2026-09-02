import { s, type Schema } from "../core/index.js";

export type Edit2 = {
  options: string[];
  uri: string;
};

export const edit2Schema: Schema<Edit2> = s.object<Edit2>({
  options: s.array(s.string()),
  uri: s.string(),
});
