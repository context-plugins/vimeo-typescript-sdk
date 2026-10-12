import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's season. */
export type Season1 = {
  /** The name of the season on this connection. */
  name: string;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const season1Schema: Schema<Season1> = s.object<Season1>({
  name: s.string(),
  options: s.array(s.string()),
  uri: s.string(),
});
