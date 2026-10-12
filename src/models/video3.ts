import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Data from the video associated with the version. */
export type Video3 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const video3Schema: Schema<Video3> = s.object<Video3>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
