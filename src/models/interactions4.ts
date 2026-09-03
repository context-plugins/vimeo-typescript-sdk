import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addSubfolderSchema, type AddSubfolder } from "./add-subfolder.js";
import { deleteVideoSchema, type DeleteVideo } from "./delete-video.js";
import { delete1Schema, type Delete1 } from "./delete1.js";
import { editSettingsSchema, type EditSettings } from "./edit-settings.js";
import { edit1Schema, type Edit1 } from "./edit1.js";
import { invite1Schema, type Invite1 } from "./invite1.js";
import { moveVideoSchema, type MoveVideo } from "./move-video.js";
import { uploadVideoSchema, type UploadVideo } from "./upload-video.js";
import { view2Schema, type View2 } from "./view2.js";

export type Interactions4 = {
  addSubfolder: AddSubfolder;
  allowMultipleReviewLinks?: boolean;
  canComment?: boolean;
  delete: Delete1;
  deleteVideo: DeleteVideo;
  edit: Edit1;
  editSettings: EditSettings;
  invite: Invite1;
  moveVideo: MoveVideo;
  reviewRedirectLink?: string;
  uploadVideo: UploadVideo;
  view: View2;
};

export const interactions4Schema: Schema<Interactions4> = s.object<Interactions4>({
  addSubfolder: addSubfolderSchema,
  allowMultipleReviewLinks: s.optional(s.boolean()),
  canComment: s.optional(s.boolean()),
  delete: delete1Schema,
  deleteVideo: deleteVideoSchema,
  edit: edit1Schema,
  editSettings: editSettingsSchema,
  invite: invite1Schema,
  moveVideo: moveVideoSchema,
  reviewRedirectLink: s.optional(s.string()),
  uploadVideo: uploadVideoSchema,
  view: view2Schema,
  _keysMap: {
    addSubfolder: "add_subfolder",
    allowMultipleReviewLinks: "allow_multiple_review_links",
    canComment: "can_comment",
    deleteVideo: "delete_video",
    editSettings: "edit_settings",
    moveVideo: "move_video",
    reviewRedirectLink: "review_redirect_link",
    uploadVideo: "upload_video",
  },
});
