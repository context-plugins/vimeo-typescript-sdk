import { s, type Schema } from "../core/index.js";

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
