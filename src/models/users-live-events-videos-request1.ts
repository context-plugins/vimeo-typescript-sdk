import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos17Schema, type Videos17 } from "./videos17.js";

export type UsersLiveEventsVideosRequest1 = {
  /** An array of video objects. */
  videos?: Videos17[];
};

export const usersLiveEventsVideosRequest1Schema: Schema<UsersLiveEventsVideosRequest1> =
  s.object<UsersLiveEventsVideosRequest1>({
    videos: s.optional(s.array(s.lazy(() => videos17Schema))),
  });
