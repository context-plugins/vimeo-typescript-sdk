import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showingSchema, type Showing } from "./showing.js";
import { unitSchema, type Unit } from "./unit.js";

export type Space = {
  free: number;
  max: number | null;
  showing: Showing;
  unit: Unit | null;
  used: number;
};

export const spaceSchema: Schema<Space> = s.object<Space>({
  free: s.number(),
  max: s.nullable(s.number()),
  showing: showingSchema,
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.number(),
});
