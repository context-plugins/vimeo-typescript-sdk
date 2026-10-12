import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentTranslationMetadata = {
  /** Whether the audio of the translation's segment is out of sync. */
  audioOutOfSync?: boolean;
  /** The ID of the translation's audio track. */
  audioTrackId?: string;
  /** The translation language in ISO 639-1 format. */
  dominantLanguage?: string;
  /** The vendor ID of the translation's dubbing. */
  dubbingId?: string;
  /** The vendor ID of the translation's segment. */
  dubbingSegmentId?: string;
  /** Whether the translation's segment is out of sync. */
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
