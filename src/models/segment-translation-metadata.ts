import { s, type Schema } from "../core/index.js";

export type SegmentTranslationMetadata = {
  audioOutOfSync?: boolean;
  audioTrackId?: string;
  dominantLanguage?: string;
  dubbingId?: string;
  dubbingSegmentId?: string;
  translationOutOfSync?: boolean;
};

export const segmentTranslationMetadataSchema: Schema<SegmentTranslationMetadata> =
  s.object<SegmentTranslationMetadata>({
    audioOutOfSync: s.optional(s.boolean()),
    audioTrackId: s.optional(s.string()),
    dominantLanguage: s.optional(s.string()),
    dubbingId: s.optional(s.string()),
    dubbingSegmentId: s.optional(s.string()),
    translationOutOfSync: s.optional(s.boolean()),
    _keysMap: {
      audioOutOfSync: "audio_out_of_sync",
      audioTrackId: "audio_track_id",
      dominantLanguage: "dominant_language",
      dubbingId: "dubbing_id",
      dubbingSegmentId: "dubbing_segment_id",
      translationOutOfSync: "translation_out_of_sync",
    },
  });
