import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AncestorPath = {
  link: string;
  name: string;
};

export const ancestorPathSchema: Schema<AncestorPath> = s.object<AncestorPath>({
  link: s.string(),
  name: s.string(),
});
