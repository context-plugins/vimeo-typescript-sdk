import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type EditingSession = {
  /** Whether the video has a watermark. */
  hasWatermark: boolean;
  /** Whether the video has been edited by Transcript Video Editing. */
  isEditedByTve: boolean;
  /** Whether the current version of the video is at the maximum resolution. */
  isMaxResolution: boolean;
  /** Whether the video has licensed music. */
  isMusicLicensed: boolean;
  /** Whether the video has been rated. */
  isRated: boolean;
  /** The minimum required Vimeo membership for the user to be able to share the video. */
  minTierForMovie: string;
  /** The result video hash for the created video. */
  resultVideoHash: string;
  /**
   * The status of the video.
   *
   * Option descriptions:
   *  * `done` - The video is finished processing.
   *  * `failed` - Video processing has failed.
   *  * `processing` - The video is still being processed.
   */
  status: Status2;
  /** The version's canonical relative URI. */
  uploadAttemptIdVersionUri?: string;
  /** The version's canonical relative URI. */
  versionUri?: string;
  /** The ID of the video's editing session. */
  vsid: number;
};

export const editingSessionSchema: Schema<EditingSession> = s.object<EditingSession>({
  hasWatermark: s.boolean(),
  isEditedByTve: s.boolean(),
  isMaxResolution: s.boolean(),
  isMusicLicensed: s.boolean(),
  isRated: s.boolean(),
  minTierForMovie: s.string(),
  resultVideoHash: s.string(),
  status: status2Schema,
  uploadAttemptIdVersionUri: s.optional(s.string()),
  versionUri: s.optional(s.string()),
  vsid: s.float64(),
  _keysMap: {
    hasWatermark: "has_watermark",
    isEditedByTve: "is_edited_by_tve",
    isMaxResolution: "is_max_resolution",
    isMusicLicensed: "is_music_licensed",
    isRated: "is_rated",
    minTierForMovie: "min_tier_for_movie",
    resultVideoHash: "result_video_hash",
    uploadAttemptIdVersionUri: "upload_attempt_id_version_uri",
    versionUri: "version_uri",
  },
});
