import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to report the requested user. */
export type Report = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** A list of valid reasons for reporting a video. */
  reason: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const reportSchema: Schema<Report> = s.object<Report>({
  options: s.array(s.string()),
  reason: s.array(s.string()),
  uri: s.string(),
});
