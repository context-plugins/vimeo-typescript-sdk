import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the video and its corresponding file size type.
 *
 * Option descriptions:
 *  * `PROCESSING` - The video is still processing or transcoding, and its file size isn't available
 *    yet.
 *  * `QUOTA_EXEMPT_CLIP` - The video is exempt from the user's storage quota.
 *  * `QUOTA_EXEMPT_USER` - The user is on an unlimited plan, and the video doesn't count against
 *    their storage quota.
 *  * `STOCK` - The video is stock footage. Stock videos don't count against the user's storage
 *    quota.
 *  * `UPLOAD` - The video is a regular upload, and its file size counts against the user's storage
 *    quota.
 *  * `UPLOAD_FAILURE` - The video failed to upload, and its file size doesn't count against the
 *    user's storage quota.
 *  * `VIMEO_CREATE` - The video was created using the Vimeo Create app. Vimeo Create videos don't
 *    count against the user's storage quota.
 *  * `VIMEO_RECORD` - The video was recorded using the Vimeo Record app. Videos for some Vimeo
 *    Record API apps don't count against the user's storage quota.
 */
export const FileSizeType = {
  Processing: "PROCESSING",
  QuotaExemptClip: "QUOTA_EXEMPT_CLIP",
  QuotaExemptUser: "QUOTA_EXEMPT_USER",
  Stock: "STOCK",
  Upload: "UPLOAD",
  UploadFailure: "UPLOAD_FAILURE",
  VimeoCreate: "VIMEO_CREATE",
  VimeoRecord: "VIMEO_RECORD",
} as const;
export type FileSizeType = (typeof FileSizeType)[keyof typeof FileSizeType] | (string & {});

export const fileSizeTypeSchema: EnumSchema<FileSizeType> = s.enumOf<FileSizeType>(FileSizeType);
