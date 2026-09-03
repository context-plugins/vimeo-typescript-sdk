import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status10Schema, type Status10 } from "./status10.js";

export type PreLiveVideo = {
  options: string[];
  status: Status10;
  uri: string;
};

export const preLiveVideoSchema: Schema<PreLiveVideo> = s.object<PreLiveVideo>({
  options: s.array(s.string()),
  status: status10Schema,
  uri: s.string(),
});
