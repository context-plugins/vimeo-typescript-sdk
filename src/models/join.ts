import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

/**
 * An action indicating that someone has joined the group. This data requires a bearer token with
 * the `private` scope.
 */
export type Join = {
  /**
   * Whether the user has followed the group. This data requires a bearer token with the `private`
   * scope.
   */
  added: boolean;
  /**
   * The time in ISO 8601 format when the user joined the group. This data requires a bearer token
   * with the `private` scope.
   */
  addedTime: string | null;
  /**
   * The user's title. If this field isn't applicable, it takes the null value. This data requires a
   * bearer token with the `private` scope.
   */
  title: string | null;
  /**
   * The user's role type. This data requires a bearer token with the `private` scope.
   *
   * Option descriptions:
   *  * `member` - The user is a member.
   *  * `moderator` - The user is a moderator.
   */
  type: Type8 | null;
  /**
   * The URI for following the group. PUT to this URI to follow the group, or DELETE to this URI to
   * unfollow the group. This data requires a bearer token with the `private` scope.
   */
  uri: string;
};

export const joinSchema: Schema<Join> = s.object<Join>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  title: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => type8Schema)),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
