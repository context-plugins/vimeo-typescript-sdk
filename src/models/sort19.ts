import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The default sort order of the videos as they appear in the showcase.
 *
 * Option descriptions:
 *  * `added_first` - The videos appear according to when they were added to the showcase, with the
 *    most recently added first.
 *  * `added_last` - The videos appear according to when they were added to the showcase, with the
 *    most recently added last.
 *  * `alphabetical` - The videos appear alphabetically by their title.
 *  * `alphabetical_desc` - The videos appear alphabetically by their title in reverse order.
 *  * `arranged` - The videos appear as arranged by the owner of the showcase.
 *  * `comments` - The videos appear according to their number of comments.
 *  * `likes` - The videos appear according to their number of likes.
 *  * `modified_time_asc` - The videos appear in ascending order based on their last modified time.
 *  * `modified_time_desc` - The videos appear in descending order based on their last modified
 *    time.
 *  * `newest` - The videos appear in chronological order with the newest first.
 *  * `oldest` - The videos appear in chronological order with the oldest first.
 *  * `plays` - The videos appear according to their number of plays.
 */
export const Sort19 = {
  AddedFirst: "added_first",
  AddedLast: "added_last",
  Alphabetical: "alphabetical",
  AlphabeticalDesc: "alphabetical_desc",
  Arranged: "arranged",
  Comments: "comments",
  Likes: "likes",
  ModifiedTimeAsc: "modified_time_asc",
  ModifiedTimeDesc: "modified_time_desc",
  Newest: "newest",
  Oldest: "oldest",
  Plays: "plays",
} as const;
export type Sort19 = (typeof Sort19)[keyof typeof Sort19] | (string & {});

export const sort19Schema: EnumSchema<Sort19> = s.enumOf<Sort19>(Sort19);
