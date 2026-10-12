import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing the actions that the user can perform on the comment. */
export type Interactions8 = {
  /** Metadata for reporting the comment as inappropriate or violating community guidelines. */
  report: Record<string, unknown>;
};

export const interactions8Schema: Schema<Interactions8> = s.object<Interactions8>({
  report: s.record(s.string(), s.unknown()),
});
