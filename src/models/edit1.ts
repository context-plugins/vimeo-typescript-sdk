import { s, type Schema } from "../core/index.js";

export type Edit1 = {
  options: string[];
  uri: string;
};

export const edit1Schema: Schema<Edit1> = s.object<Edit1>({
  options: s.array(s.string()),
  uri: s.string(),
});
