import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to activate the event. */
export type Activate = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const activateSchema: Schema<Activate> = s.object<Activate>({
  options: s.array(s.string()),
  uri: s.string(),
});
