import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video associated with the trim. */
export type Video2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const video2Schema: Schema<Video2> = s.object<Video2>({
  options: s.array(s.string()),
  uri: s.string(),
});
