import { s, type Schema } from "../core/index.js";

export type ExplicitAccessSummary = {
  allTeamCount?: number;
  teamGroupCount?: number;
  teamUserCount?: number;
};

export const explicitAccessSummarySchema: Schema<ExplicitAccessSummary> = s.object<ExplicitAccessSummary>({
  allTeamCount: s.optional(s.number()),
  teamGroupCount: s.optional(s.number()),
  teamUserCount: s.optional(s.number()),
  _keysMap: {
    allTeamCount: "all_team_count",
    teamGroupCount: "team_group_count",
    teamUserCount: "team_user_count",
  },
});
