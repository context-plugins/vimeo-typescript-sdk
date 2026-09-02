import { s, type Schema } from "../core/index.js";

export type Delete1 = {
  options: string[];
  uri: string;
};

export const delete1Schema: Schema<Delete1> = s.object<Delete1>({
  options: s.array(s.string()),
  uri: s.string(),
});
