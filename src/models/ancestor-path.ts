import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AncestorPath = {
  /** The link to the folder. */
  link: string;
  /** The name of the folder. */
  name: string;
};

export const ancestorPathSchema: Schema<AncestorPath> = s.object<AncestorPath>({
  link: s.string(),
  name: s.string(),
});
