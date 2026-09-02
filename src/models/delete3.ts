import { s, type Schema } from "../core/index.js";

export type Delete3 = {
  options: string[];
  uri: string;
};

export const delete3Schema: Schema<Delete3> = s.object<Delete3>({
  options: s.array(s.string()),
  uri: s.string(),
});
