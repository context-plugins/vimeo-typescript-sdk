import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadLinksSchema, type DownloadLinks } from "./download-links.js";
import { metadata27Schema, type Metadata27 } from "./metadata27.js";
import { provenance1Schema, type Provenance1 } from "./provenance1.js";
import { type28Schema, type Type28 } from "./type28.js";

export type TextTrack = {
  /** Whether the text track is active. */
  active: boolean;
  /** The time in ISO 8601 format when the text track was created. */
  createdOn: string;
  /** The name of the language. */
  displayLanguage: string;
  /** A map of read-only download URLs for the text track, keyed by file format. */
  downloadLinks?: DownloadLinks;
  /** The time in ISO 8601 format when the URLs in `download_links` expire. */
  downloadLinksExpiresTime?: string;
  /** The read-only URL of the text track file, intended for use with HLS playback. */
  hlsLink: string;
  /** The time in ISO 8601 format when the read-only HLS playback text track file expires. */
  hlsLinkExpiresTime: string;
  /** The text track identifier. */
  id: number;
  /**
   * The language code for the text track. To see a full list, request
   * `/languages?filter=texttrack`.
   */
  language: string | null;
  /**
   * The read-only URL of the text track file. You can upload to this link when you create it for
   * the first time.
   */
  link: string;
  /** The time in ISO 8601 format when the text track link expires. */
  linkExpiresTime: string;
  metadata?: Metadata27;
  /** The time in ISO 8601 format when the text track was last modified. */
  modifiedOn: string;
  /** The descriptive name of the text track. */
  name: string | null;
  /**
   * The upload source of the text track.
   *
   * Option descriptions:
   *  * `autogen_alternate_audio` - The text track is automatically generated from alternate audio.
   *  * `autogen_dubbed` - The text track is automatically generated from AI dubbing.
   *  * `autogen_live_audio` - The text track is automatically generated from live audio.
   *  * `autogen_source_audio` - The text track is automatically generated from source audio.
   *  * `autogen_translated` - The text track is automatically generated from AI translation.
   *  * `user_uploaded` - The text track is uploaded by a user.
   */
  provenance: Provenance1;
  /** The read-only URL of the source text track file that was originally uploaded. */
  sourceLink: string;
  /** The time in ISO 8601 format when the read-only source text track link expires. */
  sourceLinkExpiresTime: string;
  /**
   * The type of text track.
   *
   * Option descriptions:
   *  * `captions` - The text track is for captions.
   *  * `subtitles` - The text track is for subtitles.
   */
  type: Type28 | null;
  /** The relative URI of the text track. */
  uri: string;
  /** The version of the text track. This data requires a bearer token with the `private` scope. */
  version: number | null;
};

export const textTrackSchema: Schema<TextTrack> = s.object<TextTrack>({
  active: s.boolean(),
  createdOn: s.string(),
  displayLanguage: s.string(),
  downloadLinks: s.optional(s.lazy(() => downloadLinksSchema)),
  downloadLinksExpiresTime: s.optional(s.string()),
  hlsLink: s.string(),
  hlsLinkExpiresTime: s.string(),
  id: s.float64(),
  language: s.nullable(s.string()),
  link: s.string(),
  linkExpiresTime: s.string(),
  metadata: s.optional(s.lazy(() => metadata27Schema)),
  modifiedOn: s.string(),
  name: s.nullable(s.string()),
  provenance: provenance1Schema,
  sourceLink: s.string(),
  sourceLinkExpiresTime: s.string(),
  type: s.nullable(s.lazy(() => type28Schema)),
  uri: s.string(),
  version: s.nullable(s.float64()),
  _keysMap: {
    createdOn: "created_on",
    displayLanguage: "display_language",
    downloadLinks: "download_links",
    downloadLinksExpiresTime: "download_links_expires_time",
    hlsLink: "hls_link",
    hlsLinkExpiresTime: "hls_link_expires_time",
    linkExpiresTime: "link_expires_time",
    modifiedOn: "modified_on",
    sourceLink: "source_link",
    sourceLinkExpiresTime: "source_link_expires_time",
  },
});
