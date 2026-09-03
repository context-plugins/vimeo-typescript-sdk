import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequestedClip = {
  options: string[];
  uri: string;
};

export const requestedClipSchema: Schema<RequestedClip> = s.object<RequestedClip>({
  options: s.array(s.string()),
  uri: s.string(),
});
