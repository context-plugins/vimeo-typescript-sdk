import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { custom16Schema, type Custom16 } from "./custom16.js";

export type Logos16 = {
  custom?: Custom16;
  vimeo?: boolean;
};

export const logos16Schema: Schema<Logos16> = s.object<Logos16>({
  custom: s.optional(s.lazy(() => custom16Schema)),
  vimeo: s.optional(s.boolean()),
});
