import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LiveEventsAudioTracksRequest = {
  /** A list of language codes for audio tracks. */
  audioTracks?: string[];
  /** The language code for the primary audio track. */
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
