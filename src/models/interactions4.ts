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

/** A list of permitted interactions related to the folder. */
export type Interactions4 = {
  /** Information about adding a subfolder to the current folder. */
  addSubfolder: AddSubfolder;
  /** Whether the folder can have multiple review links. */
  allowMultipleReviewLinks?: boolean;
  /** Whether the user can comment on the videos of the current folder. */
  canComment?: boolean;
  /** The user's delete permissions information for this project. */
  delete: Delete1;
  /** The user's delete permissions information for this project. */
  deleteVideo: DeleteVideo;
  /** The user's edit permissions information for this project. */
  edit: Edit1;
  /** The user's edit settings permissions information for this project. */
  editSettings: EditSettings;
  /** The user's invite permissions information for this project. */
  invite: Invite1;
  /** The user's move permissions information for this project. */
  moveVideo: MoveVideo;
  /** The default review redirect link for the current folder. */
  reviewRedirectLink?: string;
  /** The user's upload permissions information for this project. */
  uploadVideo: UploadVideo;
  /** The user's view permissions information for this project. */
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
