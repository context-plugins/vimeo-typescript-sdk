import { s, type Schema } from "../core/index.js";
import { upload4Schema, type Upload4 } from "./upload4.js";

export type VideosVersionsRequest = {
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
