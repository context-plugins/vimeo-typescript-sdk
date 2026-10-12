import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersProjectsVideosRequest1 = {
  /** A comma-separated list of video URIs to add. */
  uris: string;
};

export const usersProjectsVideosRequest1Schema: Schema<UsersProjectsVideosRequest1> =
  s.object<UsersProjectsVideosRequest1>({
    uris: s.string(),
  });
