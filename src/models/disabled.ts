import { s, type Schema } from "../core/index.js";

export type Disabled = {
  reasons?: string[];
};

export const disabledSchema: Schema<Disabled> = s.object<Disabled>({
  reasons: s.optional(s.array(s.string())),
});
