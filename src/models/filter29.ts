import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filter29 = {
  All: "all",
  Buy: "buy",
  ExpiringSoon: "expiring_soon",
  Extra: "extra",
  Main: "main",
  MainViewable: "main.viewable",
  Rent: "rent",
  Trailer: "trailer",
  Unwatched: "unwatched",
  Viewable: "viewable",
  Watched: "watched",
} as const;
export type Filter29 = (typeof Filter29)[keyof typeof Filter29] | (string & {});

export const filter29Schema: EnumSchema<Filter29> = s.enumOf<Filter29>(Filter29);
