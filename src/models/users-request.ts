import { s, type Schema } from "../core/index.js";
import { genderSchema, type Gender } from "./gender.js";
import { videos18Schema, type Videos18 } from "./videos18.js";

export type UsersRequest = {
  bio?: string;
  contentFilter?: string[];
  gender?: Gender;
  link?: string;
  location?: string;
  name?: string;
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
