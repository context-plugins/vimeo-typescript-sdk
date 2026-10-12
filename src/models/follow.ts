import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An action indicating if the authenticated user has followed the category. */
export type Follow = {
  /** Whether the authenticated user has followed the category. */
  added: boolean;
  /**
   * The time in ISO 8601 format when the user followed the category, or the null value if the user
   * hasn't followed the category.
   */
  addedTime: string | null;
  /**
   * The URI for following or unfollowing the category: PUT to this URI to follow the category, or
   * DELETE to this URI to unfollow the category.
   */
  uri: string;
};

export const followSchema: Schema<Follow> = s.object<Follow>({
  added: s.boolean(),
  addedTime: s.nullable(s.string()),
  uri: s.string(),
  _keysMap: {
    addedTime: "added_time",
  },
});
