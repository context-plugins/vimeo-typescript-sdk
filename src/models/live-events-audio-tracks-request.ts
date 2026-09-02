import { s, type Schema } from "../core/index.js";

export type LiveEventsAudioTracksRequest = {
  audioTracks?: string[];
  primaryAudioTrack?: string;
};

export const liveEventsAudioTracksRequestSchema: Schema<LiveEventsAudioTracksRequest> =
  s.object<LiveEventsAudioTracksRequest>({
    audioTracks: s.optional(s.array(s.string())),
    primaryAudioTrack: s.optional(s.string()),
    _keysMap: {
      audioTracks: "audio_tracks",
      primaryAudioTrack: "primary_audio_track",
    },
  });
