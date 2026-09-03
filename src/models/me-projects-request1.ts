import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeProjectsRequest1 = {
  sendToRecentlyDeleted?: boolean;
  shouldDeleteClips?: boolean;
};

export const meProjectsRequest1Schema: Schema<MeProjectsRequest1> = s.object<MeProjectsRequest1>({
  sendToRecentlyDeleted: s.optional(s.boolean()),
  shouldDeleteClips: s.optional(s.boolean()),
  _keysMap: {
    sendToRecentlyDeleted: "send_to_recently_deleted",
    shouldDeleteClips: "should_delete_clips",
  },
});
