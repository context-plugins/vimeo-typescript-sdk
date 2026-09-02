import { s, type Schema } from "../core/index.js";
import { season1Schema, type Season1 } from "./season1.js";

export type Connections20 = {
  season: Season1;
};

export const connections20Schema: Schema<Connections20> = s.object<Connections20>({
  season: season1Schema,
});
