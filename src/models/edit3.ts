import { s, type Schema } from "../core/index.js";

export type Edit3 = {
  options: string[];
  uri: string;
};

export const edit3Schema: Schema<Edit3> = s.object<Edit3>({
  options: s.array(s.string()),
  uri: s.string(),
});
