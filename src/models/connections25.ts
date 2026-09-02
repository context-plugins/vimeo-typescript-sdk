import { s, type Schema } from "../core/index.js";
import { childTextTracksSchema, type ChildTextTracks } from "./child-text-tracks.js";
import { parentTextTrackSchema, type ParentTextTrack } from "./parent-text-track.js";

export type Connections25 = {
  childTextTracks?: ChildTextTracks;
  parentTextTrack?: ParentTextTrack;
};

export const connections25Schema: Schema<Connections25> = s.object<Connections25>({
  childTextTracks: s.optional(s.lazy(() => childTextTracksSchema)),
  parentTextTrack: s.optional(s.lazy(() => parentTextTrackSchema)),
  _keysMap: {
    childTextTracks: "child_text_tracks",
    parentTextTrack: "parent_text_track",
  },
});
