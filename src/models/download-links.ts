import { s, type Schema } from "../core/index.js";

export type DownloadLinks = {
  srt?: string;
  ttml?: string;
  vtt?: string;
};

export const downloadLinksSchema: Schema<DownloadLinks> = s.object<DownloadLinks>({
  srt: s.optional(s.string()),
  ttml: s.optional(s.string()),
  vtt: s.optional(s.string()),
});
