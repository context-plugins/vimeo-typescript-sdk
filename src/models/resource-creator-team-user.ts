import { s, type Schema } from "../core/index.js";

export type ResourceCreatorTeamUser = {
  uri: string;
};

export const resourceCreatorTeamUserSchema: Schema<ResourceCreatorTeamUser> =
  s.object<ResourceCreatorTeamUser>({
    uri: s.string(),
  });
