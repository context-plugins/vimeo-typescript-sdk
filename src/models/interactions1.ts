import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addModeratorsSchema, type AddModerators } from "./add-moderators.js";
import { addToSchema, type AddTo } from "./add-to.js";
import { follow1Schema, type Follow1 } from "./follow1.js";
import { moderateVideosSchema, type ModerateVideos } from "./moderate-videos.js";

/** A list of resource URIs related to the channel. */
export type Interactions1 = {
  /**
   * An action indicating that the authenticated user is the owner of the channel and may therefore
   * add other users as channel moderators. This data requires a bearer token with the `private`
   * scope.
   */
  addModerators: AddModerators;
  /**
   * When a channel appears in the context of adding or removing a video from it
   * (`/videos/{video_id}/available_channels`), include information about adding or removing the
   * video. This data requires a bearer token with the `private` scope.
   */
  addTo: AddTo | null;
  /**
   * An action indicating if the authenticated user has followed this channel. This data requires a
   * bearer token with the `private` scope.
   */
  follow: Follow1;
  /**
   * An action indicating that the authenticated user is a moderator of the channel and may
   * therefore add or remove videos from the channel. This data requires a bearer token with the
   * `private` scope.
   */
  moderateVideos: ModerateVideos;
};

export const interactions1Schema: Schema<Interactions1> = s.object<Interactions1>({
  addModerators: addModeratorsSchema,
  addTo: s.nullable(s.lazy(() => addToSchema)),
  follow: follow1Schema,
  moderateVideos: moderateVideosSchema,
  _keysMap: {
    addModerators: "add_moderators",
    addTo: "add_to",
    moderateVideos: "moderate_videos",
  },
});
