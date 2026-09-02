import { s, type Schema } from "../core/index.js";
import { sharedTeamSchema, type SharedTeam } from "./shared-team.js";
import { sharedUserSchema, type SharedUser } from "./shared-user.js";

export type Connections23 = {
  sharedTeam?: SharedTeam | null;
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
