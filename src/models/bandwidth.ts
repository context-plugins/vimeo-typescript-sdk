import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period1Schema, type Period1 } from "./period1.js";

export type Bandwidth = {
  period?: Period1;
};

export const bandwidthSchema: Schema<Bandwidth> = s.object<Bandwidth>({
  period: s.optional(s.lazy(() => period1Schema)),
});
