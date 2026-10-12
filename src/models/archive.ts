import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the archive data. */
export type Archive = {
  /** The ID of the archived video. */
  clipId: number;
  /** The status of the archive data. */
  status: number | null;
};

export const archiveSchema: Schema<Archive> = s.object<Archive>({
  clipId: s.float64(),
  status: s.nullable(s.float64()),
  _keysMap: {
    clipId: "clip_id",
  },
});
