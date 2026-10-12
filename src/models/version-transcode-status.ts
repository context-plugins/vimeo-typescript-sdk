import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VersionTranscodeStatus = {
  /** Whether the video has finished transcoding. */
  isComplete: boolean;
  /**
   * Whether the video is playable in all resolutions, up to either the source quality or 4K,
   * whichever is lower, at standard definition.
   */
  isFullyPlayable: boolean;
  /** Whether the video is playable. */
  isPlayable: boolean;
};

export const versionTranscodeStatusSchema: Schema<VersionTranscodeStatus> = s.object<VersionTranscodeStatus>({
  isComplete: s.boolean(),
  isFullyPlayable: s.boolean(),
  isPlayable: s.boolean(),
  _keysMap: {
    isComplete: "is_complete",
    isFullyPlayable: "is_fully_playable",
    isPlayable: "is_playable",
  },
});
