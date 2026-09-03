import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status5Schema, type Status5 } from "./status5.js";

export type Transcode = {
  status?: Status5;
};

export const transcodeSchema: Schema<Transcode> = s.object<Transcode>({
  status: s.optional(s.lazy(() => status5Schema)),
});
