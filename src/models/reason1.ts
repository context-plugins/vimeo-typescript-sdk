import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { icon1Schema, type Icon1 } from "./icon1.js";

export type Reason1 = {
  icon?: Icon1;
  message?: string;
};

export const reason1Schema: Schema<Reason1> = s.object<Reason1>({
  icon: s.optional(s.lazy(() => icon1Schema)),
  message: s.optional(s.string()),
});
