import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's projects. */
export type Projects = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of projects on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const projectsSchema: Schema<Projects> = s.object<Projects>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
