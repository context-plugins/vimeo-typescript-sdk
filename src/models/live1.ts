import { s, type Schema } from "../core/index.js";

export type Live1 = {
  streamEndTime: string | null;
  streamStartTime: string | null;
};

export const live1Schema: Schema<Live1> = s.object<Live1>({
  streamEndTime: s.nullable(s.string()),
  streamStartTime: s.nullable(s.string()),
  _keysMap: {
    streamEndTime: "stream_end_time",
    streamStartTime: "stream_start_time",
  },
});
