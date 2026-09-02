import { s, type Schema } from "../core/index.js";

export type ResourceCreatorTeamUser1 = {
  uri: string;
};

export const resourceCreatorTeamUser1Schema: Schema<ResourceCreatorTeamUser1> =
  s.object<ResourceCreatorTeamUser1>({
    uri: s.string(),
  });
