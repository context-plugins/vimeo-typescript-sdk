import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Edit = {
  blockedFields: string[];
  options: string[];
  uri: string;
};

export const editSchema: Schema<Edit> = s.object<Edit>({
  blockedFields: s.array(s.string()),
  options: s.array(s.string()),
  uri: s.string(),
  _keysMap: {
    blockedFields: "blocked_fields",
  },
});
