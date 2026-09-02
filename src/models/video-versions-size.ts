import { s, type Schema } from "../core/index.js";
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
