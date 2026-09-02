import { s, type Schema } from "../core/index.js";

export type Videos5 = {
  deepTotal: number;
  options: string[];
  total: number;
  uri: string;
};

export const videos5Schema: Schema<Videos5> = s.object<Videos5>({
  deepTotal: s.number(),
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
  _keysMap: {
    deepTotal: "deep_total",
  },
});
