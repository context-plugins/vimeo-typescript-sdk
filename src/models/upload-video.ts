import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadVideo = {
  options: string[];
  uri: string;
};

export const uploadVideoSchema: Schema<UploadVideo> = s.object<UploadVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
