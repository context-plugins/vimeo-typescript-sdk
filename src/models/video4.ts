import { s, type Schema } from "../core/index.js";

export type Video4 = {
  codec: string;
  displayCodec: string;
  fps: number | null;
  height: number;
  projection: string;
  stereoMode: string;
  width: number;
};

export const video4Schema: Schema<Video4> = s.object<Video4>({
  codec: s.string(),
  displayCodec: s.string(),
  fps: s.nullable(s.number()),
  height: s.number(),
  projection: s.string(),
  stereoMode: s.string(),
  width: s.number(),
  _keysMap: {
    displayCodec: "display_codec",
    stereoMode: "stereo_mode",
  },
});
