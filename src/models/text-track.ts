import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadLinksSchema, type DownloadLinks } from "./download-links.js";
import { metadata27Schema, type Metadata27 } from "./metadata27.js";
import { provenance1Schema, type Provenance1 } from "./provenance1.js";
import { type28Schema, type Type28 } from "./type28.js";

export type TextTrack = {
  active: boolean;
  createdOn: string;
  displayLanguage: string;
  downloadLinks?: DownloadLinks;
  downloadLinksExpiresTime?: string;
  hlsLink: string;
  hlsLinkExpiresTime: string;
  id: number;
  language: string | null;
  link: string;
  linkExpiresTime: string;
  metadata?: Metadata27;
  modifiedOn: string;
  name: string | null;
  provenance: Provenance1;
  sourceLink: string;
  sourceLinkExpiresTime: string;
  type: Type28 | null;
  uri: string;
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
  id: s.number(),
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
  version: s.nullable(s.number()),
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
