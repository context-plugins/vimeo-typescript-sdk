import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertiesSchema, type Properties } from "./properties.js";

export type CanRequestTeamRoleUpgrade = {
  options: string[];
  properties: Properties;
  uri: string;
};

export const canRequestTeamRoleUpgradeSchema: Schema<CanRequestTeamRoleUpgrade> =
  s.object<CanRequestTeamRoleUpgrade>({
    options: s.array(s.string()),
    properties: propertiesSchema,
    uri: s.string(),
  });
