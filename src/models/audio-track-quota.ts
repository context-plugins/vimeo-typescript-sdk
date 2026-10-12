import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The quota parameters for the audio tracks available for this version. */
export type AudioTrackQuota = {
  /** The number of audio tracks availible for this version. */
  free: number;
  /** Whether the current version has reached its maximum quota for audio tracks. */
  hasReachedQuota: boolean;
  /**
   * The maximum number of audio tracks that the user can upload per version based on their
   * subscription tier.
   */
  max: number;
  /** The number of audio tracks used for this version. */
  used: number;
};

export const audioTrackQuotaSchema: Schema<AudioTrackQuota> = s.object<AudioTrackQuota>({
  free: s.float64(),
  hasReachedQuota: s.boolean(),
  max: s.float64(),
  used: s.float64(),
  _keysMap: {
    hasReachedQuota: "has_reached_quota",
  },
});
