import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The associated legal hold object. */
export type LegalHold = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const legalHoldSchema: Schema<LegalHold> = s.object<LegalHold>({
  options: s.array(s.string()),
  uri: s.string(),
});
