import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The sort order of the showcase.
 *
 * Option descriptions:
 *  * `added_first` - Sort the showcase videos in order of those most recently added.
 *  * `added_last` - Sort the showcase videos in order of those least recently added.
 *  * `alphabetical` - Sort the showcase videos alphabetically.
 *  * `arranged` - Sort the showcase videos according to their custom arrangement.
 *  * `comments` - Sort the showcase videos by number of comments.
 *  * `likes` - Sort the showcase videos by number of likes.
 *  * `newest` - Sort the showcase videos in order of creation date with the newest first.
 *  * `oldest` - Sort the showcase videos in order of creation date with the oldest first.
 *  * `plays` - Sort the showcase videos by number of plays.
 */
export const Sort = {
  AddedFirst: "added_first",
  AddedLast: "added_last",
  Alphabetical: "alphabetical",
  Arranged: "arranged",
  Comments: "comments",
  Likes: "likes",
  Newest: "newest",
  Oldest: "oldest",
  Plays: "plays",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
