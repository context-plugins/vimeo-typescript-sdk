import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A standard connection object indicating how to return all the videos in the folder. */
export type Videos5 = {
  /** The total number of videos in this folder and all subfolders. */
  deepTotal: number;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const videos5Schema: Schema<Videos5> = s.object<Videos5>({
  deepTotal: s.float64(),
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
  _keysMap: {
    deepTotal: "deep_total",
  },
});
