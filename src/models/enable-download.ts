import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about enabling the download functionality during playback. */
export type EnableDownload = {
  /** Whether an upgrade is required to enable the download functionality during playback. */
  isUpgrade: boolean;
  /** Whether to enable the download functionality during playback. */
  value: boolean;
};

export const enableDownloadSchema: Schema<EnableDownload> = s.object<EnableDownload>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
