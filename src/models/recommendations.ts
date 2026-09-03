import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Recommendations = {
  options?: string[];
  resourceSignature: string;
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
