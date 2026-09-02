import { s, type Schema } from "../core/index.js";
import { liveSchema, type Live } from "./live.js";
import { staffPickSchema, type StaffPick } from "./staff-pick.js";

export type Badges = {
  dolbyVision?: boolean;
  hdr: boolean;
  hdr10?: boolean;
  hdr10Plus?: boolean;
  live: Live;
  ott4K?: boolean;
  ott51Audio?: boolean;
  ottHevc?: boolean;
  staffPick: StaffPick;
  stereoSpatial?: boolean;
  vod: boolean;
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
