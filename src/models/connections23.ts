import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sharedTeamSchema, type SharedTeam } from "./shared-team.js";
import { sharedUserSchema, type SharedUser } from "./shared-user.js";

/** A list of resource URIs related to the item. */
export type Connections23 = {
  /** Information about the team of the shared item. */
  sharedTeam?: SharedTeam | null;
  /** Information about the user who shared the item. */
  sharedUser?: SharedUser | null;
};

export const connections23Schema: Schema<Connections23> = s.object<Connections23>({
  sharedTeam: s.optionalNullable(s.lazy(() => sharedTeamSchema)),
  sharedUser: s.optionalNullable(s.lazy(() => sharedUserSchema)),
  _keysMap: {
    sharedTeam: "shared_team",
    sharedUser: "shared_user",
  },
});
