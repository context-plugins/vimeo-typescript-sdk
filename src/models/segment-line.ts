import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentLine = {
  /** The text from the segment line. */
  text: string;
  /** The speaker of the segment line. */
  voice: string | null;
};

export const segmentLineSchema: Schema<SegmentLine> = s.object<SegmentLine>({
  text: s.string(),
  voice: s.nullable(s.string()),
});
