import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which the videos inside the event appear in the playlist.
 *
 * Option descriptions:
 *  * `added_first` - The videos appear according to when they were added to the event, with the
 *    most recently added first.
 *  * `added_last` - The videos appear according to when they were added to the event, with the most
 *    recently added last.
 *  * `alphabetical` - The videos appear alphabetically by their title.
 *  * `arranged` - The videos appear as arranged by the owner of the event.
 *  * `comments` - The videos appear according to their number of comments.
 *  * `duration` - The videos appear in order of duration.
 *  * `likes` - The videos appear according to their number of likes.
 *  * `newest` - The videos appear in chronological order, with the newest first.
 *  * `oldest` - The videos appear in chronological order, with the oldest first.
 *  * `plays` - The videos appear according to their number of plays.
 */
export const PlaylistSort = {
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
export type PlaylistSort = (typeof PlaylistSort)[keyof typeof PlaylistSort] | (string & {});

export const playlistSortSchema: EnumSchema<PlaylistSort> = s.enumOf<PlaylistSort>(PlaylistSort);
