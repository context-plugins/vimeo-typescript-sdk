import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the event's thumbnails. */
export type Pictures3 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const pictures3Schema: Schema<Pictures3> = s.object<Pictures3>({
  options: s.array(s.string()),
  uri: s.string(),
});
