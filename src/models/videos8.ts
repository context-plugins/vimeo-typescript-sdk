import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Videos8 = {
  extraTotal: number;
  mainTotal: number;
  options: string[];
  total: number;
  uri: string;
  viewableTotal: number;
};

export const videos8Schema: Schema<Videos8> = s.object<Videos8>({
  extraTotal: s.number(),
  mainTotal: s.number(),
  options: s.array(s.string()),
  total: s.number(),
  uri: s.string(),
  viewableTotal: s.number(),
  _keysMap: {
    extraTotal: "extra_total",
    mainTotal: "main_total",
    viewableTotal: "viewable_total",
  },
});
