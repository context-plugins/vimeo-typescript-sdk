import { s, type Schema } from "../core/index.js";
import { period1Schema, type Period1 } from "./period1.js";

export type Bandwidth = {
  period?: Period1;
};

export const bandwidthSchema: Schema<Bandwidth> = s.object<Bandwidth>({
  period: s.optional(s.lazy(() => period1Schema)),
});
