import { s, type Schema } from "../core/index.js";

export type Stats = {
  plays: number | null;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  plays: s.nullable(s.number()),
});
