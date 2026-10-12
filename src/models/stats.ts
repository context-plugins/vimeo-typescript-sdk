import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A collection of analytics associated with the video. */
export type Stats = {
  /** The current total number of times that the video has been played. */
  plays: number | null;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  plays: s.nullable(s.float64()),
});
