import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertiesSchema, type Properties } from "./properties.js";

/** Information about whether the user can request a team upgrade from the Viewer role. */
export type CanRequestTeamRoleUpgrade = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** An object of suggested fields to be used for this interaction. */
  properties: Properties;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const canRequestTeamRoleUpgradeSchema: Schema<CanRequestTeamRoleUpgrade> =
  s.object<CanRequestTeamRoleUpgrade>({
    options: s.array(s.string()),
    properties: propertiesSchema,
    uri: s.string(),
  });
