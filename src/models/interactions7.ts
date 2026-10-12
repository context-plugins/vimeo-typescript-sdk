import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addCustomThumbnailsSchema, type AddCustomThumbnails } from "./add-custom-thumbnails.js";
import { addLiveEventsSchema, type AddLiveEvents } from "./add-live-events.js";
import { addLogosSchema, type AddLogos } from "./add-logos.js";
import { addTo1Schema, type AddTo1 } from "./add-to1.js";
import { addVideosSchema, type AddVideos } from "./add-videos.js";
import {
  canUpdatePrivacyToPublic1Schema,
  type CanUpdatePrivacyToPublic1,
} from "./can-update-privacy-to-public1.js";
import { delete2Schema, type Delete2 } from "./delete2.js";
import { editLiveEventsSchema, type EditLiveEvents } from "./edit-live-events.js";
import { edit2Schema, type Edit2 } from "./edit2.js";
import { invite3Schema, type Invite3 } from "./invite3.js";
import { viewPrivacy1Schema, type ViewPrivacy1 } from "./view-privacy1.js";

/** A list of resource URIs related to the showcase. */
export type Interactions7 = {
  /**
   * An action indicating that the authenticated user is an administrator of the showcase and may
   * therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
   */
  addCustomThumbnails: AddCustomThumbnails;
  /**
   * An action indicating that the authenticated user is an administrator of the showcase and may
   * therefore add events. This data requires a bearer token with the `private` scope.
   */
  addLiveEvents: AddLiveEvents;
  /**
   * An action indicating that the authenticated user is an administrator of the showcase and may
   * therefore add custom logos. This data requires a bearer token with the `private` scope.
   */
  addLogos: AddLogos;
  /**
   * Information about adding or removing a video from the showcase. This data requires a bearer
   * token with the `private` scope.
   */
  addTo: AddTo1 | null;
  /**
   * An action indicating that the authenticated user is an administrator of the showcase and may
   * therefore add videos. This data requires a bearer token with the `private` scope.
   */
  addVideos: AddVideos;
  /** Whether the user can update the showcase privacy to public. */
  canUpdatePrivacyToPublic: CanUpdatePrivacyToPublic1;
  /** Information about where and how to delete a showcase. */
  delete: Delete2 | null;
  /** Information about where and how to edit a showcase. */
  edit: Edit2 | null;
  /**
   * An action indicating that the authenticated user can edit event videos inside the showcase.
   * This data requires a bearer token with the `private` scope.
   */
  editLiveEvents: EditLiveEvents;
  /** Information about where and how to invite a team member to a showcase. */
  invite: Invite3 | null;
  /** Information about whether a user has permissions to view the privacy of the showcase. */
  viewPrivacy: ViewPrivacy1 | null;
};

export const interactions7Schema: Schema<Interactions7> = s.object<Interactions7>({
  addCustomThumbnails: addCustomThumbnailsSchema,
  addLiveEvents: addLiveEventsSchema,
  addLogos: addLogosSchema,
  addTo: s.nullable(s.lazy(() => addTo1Schema)),
  addVideos: addVideosSchema,
  canUpdatePrivacyToPublic: canUpdatePrivacyToPublic1Schema,
  delete: s.nullable(s.lazy(() => delete2Schema)),
  edit: s.nullable(s.lazy(() => edit2Schema)),
  editLiveEvents: editLiveEventsSchema,
  invite: s.nullable(s.lazy(() => invite3Schema)),
  viewPrivacy: s.nullable(s.lazy(() => viewPrivacy1Schema)),
  _keysMap: {
    addCustomThumbnails: "add_custom_thumbnails",
    addLiveEvents: "add_live_events",
    addLogos: "add_logos",
    addTo: "add_to",
    addVideos: "add_videos",
    canUpdatePrivacyToPublic: "can_update_privacy_to_public",
    editLiveEvents: "edit_live_events",
    viewPrivacy: "view_privacy",
  },
});
