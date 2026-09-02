import { s, type Schema } from "../core/index.js";

export type EventAudioTracks = {
  audioTracks: string[];
  primaryAudioTrack: string;
};

export const eventAudioTracksSchema: Schema<EventAudioTracks> = s.object<EventAudioTracks>({
  audioTracks: s.array(s.string()),
  primaryAudioTrack: s.string(),
  _keysMap: {
    audioTracks: "audio_tracks",
    primaryAudioTrack: "primary_audio_track",
  },
});
