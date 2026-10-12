import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videos16Schema, type Videos16 } from "./videos16.js";

export type UsersLiveEventsVideosRequest = {
  /** An array of video objects. */
  videos?: Videos16[];
};

export const usersLiveEventsVideosRequestSchema: Schema<UsersLiveEventsVideosRequest> =
  s.object<UsersLiveEventsVideosRequest>({
    videos: s.optional(s.array(s.lazy(() => videos16Schema))),
  });
