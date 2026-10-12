import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to validate a video field. */
export type Validate = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The URI that resolves to the connection data. */
  uri: string;
};

export const validateSchema: Schema<Validate> = s.object<Validate>({
  options: s.array(s.string()),
  uri: s.string(),
});
