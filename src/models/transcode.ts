import { s, type Schema } from "../core/index.js";
import { status6Schema, type Status6 } from "./status6.js";

export type Transcode = {
  status?: Status6;
};

export const transcodeSchema: Schema<Transcode> = s.object<Transcode>({
  status: s.optional(s.lazy(() => status6Schema)),
});
