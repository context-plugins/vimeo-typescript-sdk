import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hlsDashVideoFileSchema, type HlsDashVideoFile } from "./hls-dash-video-file.js";
import { progressiveSchema, type Progressive } from "./progressive.js";
import { status4Schema, type Status4 } from "./status4.js";

export type Play = {
  dash?: HlsDashVideoFile;
  hls?: HlsDashVideoFile;
  playerFairplayCertificateUrl: string;
  playerLicenseUrl: string;
  progressive?: Progressive[];
  status: Status4;
};

export const playSchema: Schema<Play> = s.object<Play>({
  dash: s.optional(s.lazy(() => hlsDashVideoFileSchema)),
  hls: s.optional(s.lazy(() => hlsDashVideoFileSchema)),
  playerFairplayCertificateUrl: s.string(),
  playerLicenseUrl: s.string(),
  progressive: s.optional(s.array(s.lazy(() => progressiveSchema))),
  status: status4Schema,
  _keysMap: {
    playerFairplayCertificateUrl: "player_fairplay_certificate_url",
    playerLicenseUrl: "player_license_url",
  },
});
