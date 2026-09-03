import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Interactions8 = {
  report: Record<string, unknown>;
};

export const interactions8Schema: Schema<Interactions8> = s.object<Interactions8>({
  report: s.record(s.string(), s.unknown()),
});
