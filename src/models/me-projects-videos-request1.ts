import { s, type Schema } from "../core/index.js";

export type MeProjectsVideosRequest1 = {
  uris: string;
};

export const meProjectsVideosRequest1Schema: Schema<MeProjectsVideosRequest1> =
  s.object<MeProjectsVideosRequest1>({
    uris: s.string(),
  });
