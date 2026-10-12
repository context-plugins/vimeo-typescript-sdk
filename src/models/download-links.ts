import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A map of read-only download URLs for the text track, keyed by file format. */
export type DownloadLinks = {
  /** The download URL for the SubRip representation. */
  srt?: string;
  /** The download URL for the TTML representation. */
  ttml?: string;
  /** The download URL for the WebVTT representation. */
  vtt?: string;
};

export const downloadLinksSchema: Schema<DownloadLinks> = s.object<DownloadLinks>({
  srt: s.optional(s.string()),
  ttml: s.optional(s.string()),
  vtt: s.optional(s.string()),
});
