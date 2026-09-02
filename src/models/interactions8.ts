import { s, type Schema } from "../core/index.js";

export type Interactions8 = {
  report: Record<string, unknown>;
};

export const interactions8Schema: Schema<Interactions8> = s.object<Interactions8>({
  report: s.record(s.string(), s.unknown()),
});
