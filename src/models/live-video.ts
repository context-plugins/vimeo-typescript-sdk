import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type LiveVideo = {
  options: string[];
  status: Status11;
  uri: string;
};

export const liveVideoSchema: Schema<LiveVideo> = s.object<LiveVideo>({
  options: s.array(s.string()),
  status: status11Schema,
  uri: s.string(),
});
