import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsVideosRequest1 = {
  /** A comma-separated list of video URIs to add. */
  uris: string;
};

export const meProjectsVideosRequest1Schema: Schema<MeProjectsVideosRequest1> =
  s.object<MeProjectsVideosRequest1>({
    uris: s.string(),
  });
