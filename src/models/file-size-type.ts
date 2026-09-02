import { s, type EnumSchema } from "../core/index.js";

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
