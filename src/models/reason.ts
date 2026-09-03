import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconSchema, type Icon } from "./icon.js";

export type Reason = {
  icon?: Icon;
  message?: string;
};

export const reasonSchema: Schema<Reason> = s.object<Reason>({
  icon: s.optional(s.lazy(() => iconSchema)),
  message: s.optional(s.string()),
});
