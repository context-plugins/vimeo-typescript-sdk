import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which the videos of the event appear within the event's playlist.
 *
 * Option descriptions:
 *  * `added_first` - The most recently added videos appear first.
 *  * `added_last` - The most recently added videos appear last.
 *  * `alphabetical` - The videos appear in alphabetical order.
 *  * `arranged` - The videos appear in the order in which the user has arranged them.
 *  * `comments` - The videos appear in order of number of comments.
 *  * `duration` - The videos appear in order of duration.
 *  * `likes` - The videos appear in order of number of likes.
 *  * `newest` - The newest videos appear first.
 *  * `oldest` - The oldest videos appear first.
 *  * `plays` - The videos appear in order of number of plays.
 */
export const PlaylistSort2 = {
  AddedFirst: "added_first",
  AddedLast: "added_last",
  Alphabetical: "alphabetical",
  Arranged: "arranged",
  Comments: "comments",
  Duration: "duration",
  Likes: "likes",
  Newest: "newest",
  Oldest: "oldest",
  Plays: "plays",
} as const;
export type PlaylistSort2 = (typeof PlaylistSort2)[keyof typeof PlaylistSort2] | (string & {});

export const playlistSort2Schema: EnumSchema<PlaylistSort2> = s.enumOf<PlaylistSort2>(PlaylistSort2);
