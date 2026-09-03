import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stats = {
  plays: number | null;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  plays: s.nullable(s.number()),
});
