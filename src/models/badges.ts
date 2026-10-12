import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { liveSchema, type Live } from "./live.js";
import { staffPickSchema, type StaffPick } from "./staff-pick.js";

/** A collection of the video's badges. */
export type Badges = {
  /** Whether the video was filmed using Dolby Vision. */
  dolbyVision?: boolean;
  /** Whether the video has an HDR-compatible transcode. */
  hdr: boolean;
  /** Whether the video was filmed using HDR10. */
  hdr10?: boolean;
  /** Whether the video was filmed using HDR10 Plus. */
  hdr10Plus?: boolean;
  live: Live;
  /** Whether the video has a 4K-quality transcode. */
  ott4K?: boolean;
  /** Whether the video has 5.1 audio. */
  ott51Audio?: boolean;
  /** Whether the video has an HEVC-compatible transcode. */
  ottHevc?: boolean;
  staffPick: StaffPick;
  /** Whether the video was filmed using stereo spatial. */
  stereoSpatial?: boolean;
  /** Whether the video is a Vimeo On Demand video. */
  vod: boolean;
  /** Whether the video is a Vimeo Weekend Challenge. */
  weekendChallenge: boolean;
};

export const badgesSchema: Schema<Badges> = s.object<Badges>({
  dolbyVision: s.optional(s.boolean()),
  hdr: s.boolean(),
  hdr10: s.optional(s.boolean()),
  hdr10Plus: s.optional(s.boolean()),
  live: liveSchema,
  ott4K: s.optional(s.boolean()),
  ott51Audio: s.optional(s.boolean()),
  ottHevc: s.optional(s.boolean()),
  staffPick: staffPickSchema,
  stereoSpatial: s.optional(s.boolean()),
  vod: s.boolean(),
  weekendChallenge: s.boolean(),
  _keysMap: {
    dolbyVision: "dolby_vision",
    hdr10: "hdr_10",
    hdr10Plus: "hdr_10_plus",
    ott4K: "ott_4k",
    ott51Audio: "ott_5_1_audio",
    ottHevc: "ott_hevc",
    staffPick: "staff_pick",
    stereoSpatial: "stereo_spatial",
    weekendChallenge: "weekend_challenge",
  },
});
