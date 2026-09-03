import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceCreatorTeamUser1 = {
  uri: string;
};

export const resourceCreatorTeamUser1Schema: Schema<ResourceCreatorTeamUser1> =
  s.object<ResourceCreatorTeamUser1>({
    uri: s.string(),
  });
