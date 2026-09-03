import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type EditingSession = {
  hasWatermark: boolean;
  isEditedByTve: boolean;
  isMaxResolution: boolean;
  isMusicLicensed: boolean;
  isRated: boolean;
  minTierForMovie: string;
  resultVideoHash: string;
  status: Status2;
  uploadAttemptIdVersionUri?: string;
  versionUri?: string;
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
  vsid: s.number(),
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
