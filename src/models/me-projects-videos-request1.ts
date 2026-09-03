import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsVideosRequest1 = {
  uris: string;
};

export const meProjectsVideosRequest1Schema: Schema<MeProjectsVideosRequest1> =
  s.object<MeProjectsVideosRequest1>({
    uris: s.string(),
  });
