import { s, type Schema } from "../core/index.js";

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
