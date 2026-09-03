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

export type Interactions7 = {
  addCustomThumbnails: AddCustomThumbnails;
  addLiveEvents: AddLiveEvents;
  addLogos: AddLogos;
  addTo: AddTo1 | null;
  addVideos: AddVideos;
  canUpdatePrivacyToPublic: CanUpdatePrivacyToPublic1;
  delete: Delete2 | null;
  edit: Edit2 | null;
  editLiveEvents: EditLiveEvents;
  invite: Invite3 | null;
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
