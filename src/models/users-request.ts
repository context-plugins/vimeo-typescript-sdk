import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";
import { videos18Schema, type Videos18 } from "./videos18.js";

export type UsersRequest = {
  /** The user's bio. */
  bio?: string;
  /**
   * A list of values describing the content in the user's videos. Find the full list in the
   * [/contentratings](https://developer.vimeo.com/api/reference/videos#get_content_ratings)
   * endpoint. You must provide a comma-separated list if you're using a query string or an array if
   * you're using JSON.
   */
  contentFilter?: string[];
  /**
   * The authenticated user's gender.
   *
   * Option descriptions:
   *  * `f` - The user's preferred pronouns are she and her.
   *  * `m` - The user's preferred pronouns are he and him.
   *  * `n` - The user would rather not give preferred pronouns.
   *  * `o` - The user's preferred pronouns are they and them.
   */
  gender?: Gender;
  /** The user's custom Vimeo URL. */
  link?: string;
  /** The user's location. */
  location?: string;
  /** The user's display name. */
  name?: string;
  /**
   * The default password for all future videos that this user uploads. To use this field, the
   * **videos.privacy.view** field must be `password`.
   */
  password?: string;
  videos?: Videos18;
};

export const usersRequestSchema: Schema<UsersRequest> = s.object<UsersRequest>({
  bio: s.optional(s.string()),
  contentFilter: s.optional(s.array(s.string())),
  gender: s.optional(s.lazy(() => genderSchema)),
  link: s.optional(s.string()),
  location: s.optional(s.string()),
  name: s.optional(s.string()),
  password: s.optional(s.string()),
  videos: s.optional(s.lazy(() => videos18Schema)),
  _keysMap: {
    contentFilter: "content_filter",
  },
});
