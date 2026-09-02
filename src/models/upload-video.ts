import { s, type Schema } from "../core/index.js";

export type UploadVideo = {
  options: string[];
  uri: string;
};

export const uploadVideoSchema: Schema<UploadVideo> = s.object<UploadVideo>({
  options: s.array(s.string()),
  uri: s.string(),
});
