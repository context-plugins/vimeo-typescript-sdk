import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersProjectsVideosRequest1 = {
  uris: string;
};

export const usersProjectsVideosRequest1Schema: Schema<UsersProjectsVideosRequest1> =
  s.object<UsersProjectsVideosRequest1>({
    uris: s.string(),
  });
