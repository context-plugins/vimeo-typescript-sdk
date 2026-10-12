import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { season1Schema, type Season1 } from "./season1.js";

export type Connections20 = {
  /** Information about the video's season. */
  season: Season1;
};

export const connections20Schema: Schema<Connections20> = s.object<Connections20>({
  season: season1Schema,
});
