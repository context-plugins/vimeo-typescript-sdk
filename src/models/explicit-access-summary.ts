import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The explicit access summary of the video. This data requires a bearer token with the `private`
 * scope.
 */
export type ExplicitAccessSummary = {
  /**
   * The number of direct access grants for all teams. This data requires a bearer token with the
   * `private` scope.
   */
  allTeamCount?: number;
  /**
   * The number of direct access grants for team groups. This data requires a bearer token with the
   * `private` scope.
   */
  teamGroupCount?: number;
  /**
   * The number of direct access grants for team users. This data requires a bearer token with the
   * `private` scope.
   */
  teamUserCount?: number;
};

export const explicitAccessSummarySchema: Schema<ExplicitAccessSummary> = s.object<ExplicitAccessSummary>({
  allTeamCount: s.optional(s.float64()),
  teamGroupCount: s.optional(s.float64()),
  teamUserCount: s.optional(s.float64()),
  _keysMap: {
    allTeamCount: "all_team_count",
    teamGroupCount: "team_group_count",
    teamUserCount: "team_user_count",
  },
});
