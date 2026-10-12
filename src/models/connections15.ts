import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { liveVideoSchema, type LiveVideo } from "./live-video.js";
import { pictures3Schema, type Pictures3 } from "./pictures3.js";
import { preLiveVideoSchema, type PreLiveVideo } from "./pre-live-video.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";
import { videos10Schema, type Videos10 } from "./videos10.js";

/** A collection of information that is connected to this resource. */
export type Connections15 = {
  /** Information about the event's live video, where applicable. */
  liveVideo: LiveVideo | null;
  /** Information about the event's thumbnails. */
  pictures: Pictures3;
  /**
   * Information about the event's pre-live video, where applicable. A pre-live video is either
   * activated or in the process of being activated.
   */
  preLiveVideo: PreLiveVideo | null;
  /** Information about the team member who owns the event. */
  teamMember: TeamMember | null;
  /** Information about the videos that belong to the event. */
  videos: Videos10;
};

export const connections15Schema: Schema<Connections15> = s.object<Connections15>({
  liveVideo: s.nullable(s.lazy(() => liveVideoSchema)),
  pictures: pictures3Schema,
  preLiveVideo: s.nullable(s.lazy(() => preLiveVideoSchema)),
  teamMember: s.nullable(s.lazy(() => teamMemberSchema)),
  videos: videos10Schema,
  _keysMap: {
    liveVideo: "live_video",
    preLiveVideo: "pre_live_video",
    teamMember: "team_member",
  },
});
