import { s, type Schema } from "../core/index.js";

export type Add = {
  uri?: string;
};

export const addSchema: Schema<Add> = s.object<Add>({
  uri: s.optional(s.string()),
});
