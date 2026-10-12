import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos associated with the On Demand page. */
export type Videos8 = {
  /** The total number of extra videos on the On Demand page. */
  extraTotal: number;
  /** The total number of main videos on the On Demand page. */
  mainTotal: number;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
  /** The total number of viewable videos on the On Demand page. */
  viewableTotal: number;
};

export const videos8Schema: Schema<Videos8> = s.object<Videos8>({
  extraTotal: s.float64(),
  mainTotal: s.float64(),
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
  viewableTotal: s.float64(),
  _keysMap: {
    extraTotal: "extra_total",
    mainTotal: "main_total",
    viewableTotal: "viewable_total",
  },
});
