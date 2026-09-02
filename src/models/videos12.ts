import { s, type Schema } from "../core/index.js";

export type Videos12 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos12Schema: Schema<Videos12> = s.object<Videos12>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
