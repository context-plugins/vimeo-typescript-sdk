import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { upload4Schema, type Upload4 } from "./upload4.js";

export type VideosVersionsRequest = {
  /** The name of the version. */
  fileName: string;
  upload: Upload4;
};

export const videosVersionsRequestSchema: Schema<VideosVersionsRequest> = s.object<VideosVersionsRequest>({
  fileName: s.string(),
  upload: upload4Schema,
  _keysMap: {
    fileName: "file_name",
  },
});
