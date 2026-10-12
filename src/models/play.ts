import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hlsDashVideoFileSchema, type HlsDashVideoFile } from "./hls-dash-video-file.js";
import { progressiveSchema, type Progressive } from "./progressive.js";
import { status4Schema, type Status4 } from "./status4.js";

export type Play = {
  /** The DASH video file. */
  dash?: HlsDashVideoFile;
  /** The HLS video file. */
  hls?: HlsDashVideoFile;
  /**
   * The player URL hosting the FairPlay certification that's required for the digital rights
   * management playback.
   */
  playerFairplayCertificateUrl: string;
  /** The player license URL related to DRM playback. */
  playerLicenseUrl: string;
  /** The progressive video files. */
  progressive?: Progressive[];
  /**
   * The play status of the video.
   *
   * Option descriptions:
   *  * `drm_plays_exceeded` - The user's quota for DRM plays has been exceeded.
   *  * `playable` - The video is playable.
   *  * `purchase_required` - The video must be purchased.
   *  * `restricted` - Playback for the video is restricted.
   *  * `unavailable` - The video is unavailable.
   */
  status: Status4;
};

export const playSchema: Schema<Play> = s.object<Play>({
  dash: s.optional(s.lazy(() => hlsDashVideoFileSchema)),
  hls: s.optional(s.lazy(() => hlsDashVideoFileSchema)),
  playerFairplayCertificateUrl: s.string(),
  playerLicenseUrl: s.string(),
  progressive: s.optional(s.array(s.lazy(() => progressiveSchema))),
  status: status4Schema,
  _keysMap: {
    playerFairplayCertificateUrl: "player_fairplay_certificate_url",
    playerLicenseUrl: "player_license_url",
  },
});
