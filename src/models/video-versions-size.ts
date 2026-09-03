import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileSizeTypeSchema, type FileSizeType } from "./file-size-type.js";

export type VideoVersionsSize = {
  fileSizeType: FileSizeType;
  numVersions: number;
  totalSize: number;
};

export const videoVersionsSizeSchema: Schema<VideoVersionsSize> = s.object<VideoVersionsSize>({
  fileSizeType: fileSizeTypeSchema,
  numVersions: s.number(),
  totalSize: s.number(),
  _keysMap: {
    fileSizeType: "file_size_type",
    numVersions: "num_versions",
    totalSize: "total_size",
  },
});
