import { s, type EnumSchema } from "../core/index.js";

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
