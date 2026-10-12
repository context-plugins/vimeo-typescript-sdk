import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/**
 * An action indicating if the authenticated user has followed this channel. This data requires a
 * bearer token with the `private` scope.
 */
export type Follow1 = {
  /**
   * Whether the authenticated user has followed this channel. This data requires a bearer token
   * with the `private` scope.
   */
  added: boolean;
  /**
   * The time in ISO 8601 format that the user followed this channel, or the null value if the user
   * hasn't followed the channel. This data requires a bearer token with the `private` scope.
   */
  addedTime: string | null;
  /**
   * The authenticated user's role type. This data requires a bearer token with the `private` scope.
   *
   * Option descriptions:
   *  * `moderator` - The authenticated user is a moderator.
   *  * `subscriber` - The authenticated user is a subscriber.
   */
  type: Type1 | null;
  /**
   * The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or
   * DELETE to this URI to unfollow the channel. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const follow1Schema: Schema<Follow1> = s.object<Follow1>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type1Schema)),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
