import { s, type Schema } from "../core/index.js";

export type SegmentLine = {
  text: string;
  voice: string | null;
};

export const segmentLineSchema: Schema<SegmentLine> = s.object<SegmentLine>({
  text: s.string(),
  voice: s.nullable(s.string()),
});
