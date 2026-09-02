import { s, type Schema } from "../core/index.js";

export type Videos14 = {
  options: string[];
  total: number;
  uri: string;
};

export const videos14Schema: Schema<Videos14> = s.object<Videos14>({
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
});
