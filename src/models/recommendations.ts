import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the recommendations for the video. */
export type Recommendations = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The signature for the recommendations resource. */
  resourceSignature: string;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const recommendationsSchema: Schema<Recommendations> = s.object<Recommendations>({
  options: s.optional(s.array(s.string())),
  resourceSignature: s.string(),
  uri: s.optional(s.string()),
  _keysMap: {
    resourceSignature: "resource_signature",
  },
});
