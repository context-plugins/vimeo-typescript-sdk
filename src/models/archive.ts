import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Archive = {
  clipId: number;
  status: number | null;
};

export const archiveSchema: Schema<Archive> = s.object<Archive>({
  clipId: s.number(),
  status: s.nullable(s.number()),
  _keysMap: {
    clipId: "clip_id",
  },
});
