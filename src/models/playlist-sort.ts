import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
