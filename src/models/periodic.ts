import { s, type Schema } from "../core/index.js";
import { period3Schema, type Period3 } from "./period3.js";
import { unitSchema, type Unit } from "./unit.js";

export type Periodic = {
  free: number | null;
  max: number | null;
  period: Period3 | null;
  resetDate: string | null;
  unit: Unit | null;
  used: number | null;
};

export const periodicSchema: Schema<Periodic> = s.object<Periodic>({
  free: s.nullable(s.number()),
  max: s.nullable(s.number()),
  period: s.nullable(s.lazy(() => period3Schema)),
  resetDate: s.nullable(s.string()),
  unit: s.nullable(s.lazy(() => unitSchema)),
  used: s.nullable(s.number()),
  _keysMap: {
    resetDate: "reset_date",
  },
});
