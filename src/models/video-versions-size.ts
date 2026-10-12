import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileSizeTypeSchema, type FileSizeType } from "./file-size-type.js";

export type VideoVersionsSize = {
  /**
   * The status of the video and its corresponding file size type.
   *
   * Option descriptions:
   *  * `PROCESSING` - The video is still processing or transcoding, and its file size isn't
   *    available yet.
   *  * `QUOTA_EXEMPT_CLIP` - The video is exempt from the user's storage quota.
   *  * `QUOTA_EXEMPT_USER` - The user is on an unlimited plan, and the video doesn't count against
   *    their storage quota.
   *  * `STOCK` - The video is stock footage. Stock videos don't count against the user's storage
   *    quota.
   *  * `UPLOAD` - The video is a regular upload, and its file size counts against the user's
   *    storage quota.
   *  * `UPLOAD_FAILURE` - The video failed to upload, and its file size doesn't count against the
   *    user's storage quota.
   *  * `VIMEO_CREATE` - The video was created using the Vimeo Create app. Vimeo Create videos don't
   *    count against the user's storage quota.
   *  * `VIMEO_RECORD` - The video was recorded using the Vimeo Record app. Videos for some Vimeo
   *    Record API apps don't count against the user's storage quota.
   */
  fileSizeType: FileSizeType;
  /** The number of versions for the video. */
  numVersions: number;
  /** The total combined file size for all versions of the video. */
  totalSize: number;
};

export const videoVersionsSizeSchema: Schema<VideoVersionsSize> = s.object<VideoVersionsSize>({
  fileSizeType: fileSizeTypeSchema,
  numVersions: s.float64(),
  totalSize: s.float64(),
  _keysMap: {
    fileSizeType: "file_size_type",
    numVersions: "num_versions",
    totalSize: "total_size",
  },
});
