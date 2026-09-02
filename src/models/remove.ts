import { s, type Schema } from "../core/index.js";

export type Remove = {
  uri?: string;
};

export const removeSchema: Schema<Remove> = s.object<Remove>({
  uri: s.optional(s.string()),
});
