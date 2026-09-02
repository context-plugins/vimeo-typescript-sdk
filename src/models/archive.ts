import { s, type Schema } from "../core/index.js";

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
