import { s, type Schema } from "../core/index.js";

export type VersionTranscodeStatus = {
  isComplete: boolean;
  isFullyPlayable: boolean;
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
