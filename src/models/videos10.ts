import { s, type Schema } from "../core/index.js";

export type Videos10 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos10Schema: Schema<Videos10> = s.object<Videos10>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
