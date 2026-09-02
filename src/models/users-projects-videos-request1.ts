import { s, type Schema } from "../core/index.js";

export type UsersProjectsVideosRequest1 = {
  uris: string;
};

export const usersProjectsVideosRequest1Schema: Schema<UsersProjectsVideosRequest1> =
  s.object<UsersProjectsVideosRequest1>({
    uris: s.string(),
  });
