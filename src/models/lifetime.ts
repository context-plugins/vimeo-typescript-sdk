import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type Lifetime = {
  free: number | null;
  max: number | null;
  unit: Unit | null;
  used: number | null;
};

export const lifetimeSchema: Schema<Lifetime> = s.object<Lifetime>({
  free: s.nullable(s.number()),
  max: s.nullable(s.number()),
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.nullable(s.number()),
});
