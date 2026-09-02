import { s, type Schema } from "../core/index.js";
import { disabled1Schema, type Disabled1 } from "./disabled1.js";

export type Albums1 = {
  disabled?: Disabled1;
  options?: string[];
  total?: number;
  uri?: string;
};

export const albums1Schema: Schema<Albums1> = s.object<Albums1>({
  disabled: s.optional(s.lazy(() => disabled1Schema)),
  options: s.optional(s.array(s.string())),
  total: s.optional(s.number()),
  uri: s.optional(s.string()),
});
