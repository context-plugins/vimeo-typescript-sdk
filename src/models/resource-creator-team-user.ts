import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceCreatorTeamUser = {
  uri: string;
};

export const resourceCreatorTeamUserSchema: Schema<ResourceCreatorTeamUser> =
  s.object<ResourceCreatorTeamUser>({
    uri: s.string(),
  });
