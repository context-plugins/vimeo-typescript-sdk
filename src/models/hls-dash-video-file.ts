import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HlsDashVideoFile = {
  /** The direct link to the video file. */
  link: string | null;
  /** The time in ISO 8601 format when the link to the video file expires. */
  linkExpirationTime: string;
  /** The URL for logging events. */
  log?: string | null;
};

export const hlsDashVideoFileSchema: Schema<HlsDashVideoFile> = s.object<HlsDashVideoFile>({
  link: s.nullable(s.string()),
  linkExpirationTime: s.string(),
  log: s.optionalNullable(s.string()),
  _keysMap: {
    linkExpirationTime: "link_expiration_time",
  },
});
