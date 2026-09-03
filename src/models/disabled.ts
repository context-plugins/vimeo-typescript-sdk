import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Disabled = {
  reasons?: string[];
};

export const disabledSchema: Schema<Disabled> = s.object<Disabled>({
  reasons: s.optional(s.array(s.string())),
});
