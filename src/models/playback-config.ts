import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enableAskAiSchema, type EnableAskAi } from "./enable-ask-ai.js";
import { enableCommentsSchema, type EnableComments } from "./enable-comments.js";
import { enableDownloadSchema, type EnableDownload } from "./enable-download.js";
import { enableLikeSchema, type EnableLike } from "./enable-like.js";
import { enableShareSchema, type EnableShare } from "./enable-share.js";
import { playbackGridSizeSchema, type PlaybackGridSize } from "./playback-grid-size.js";
import { showPlaybackAddedDateSchema, type ShowPlaybackAddedDate } from "./show-playback-added-date.js";
import {
  showPlaybackGridProfileImageSchema,
  type ShowPlaybackGridProfileImage,
} from "./show-playback-grid-profile-image.js";
import {
  showPlaybackGridProfileNameSchema,
  type ShowPlaybackGridProfileName,
} from "./show-playback-grid-profile-name.js";
import {
  showPlaybackGridVideoCardSchema,
  type ShowPlaybackGridVideoCard,
} from "./show-playback-grid-video-card.js";
import {
  showPlaybackGridVideoTitleSchema,
  type ShowPlaybackGridVideoTitle,
} from "./show-playback-grid-video-title.js";
import {
  showPlaybackProfileImageSchema,
  type ShowPlaybackProfileImage,
} from "./show-playback-profile-image.js";
import { showPlaybackProfileNameSchema, type ShowPlaybackProfileName } from "./show-playback-profile-name.js";
import {
  showPlaybackUploadedDateSchema,
  type ShowPlaybackUploadedDate,
} from "./show-playback-uploaded-date.js";
import { showPlaybackVideoCountSchema, type ShowPlaybackVideoCount } from "./show-playback-video-count.js";
import {
  showPlaybackVideoDescriptionSchema,
  type ShowPlaybackVideoDescription,
} from "./show-playback-video-description.js";
import { showPlaybackVideoTitleSchema, type ShowPlaybackVideoTitle } from "./show-playback-video-title.js";
import { showPlaybackViewsSchema, type ShowPlaybackViews } from "./show-playback-views.js";

export type PlaybackConfig = {
  /** Information about enabling the Ask AI functionality during playback. */
  enableAskAi: EnableAskAi;
  /** Information about enabling the comments functionality during playback. */
  enableComments: EnableComments;
  /** Information about enabling the download functionality during playback. */
  enableDownload: EnableDownload;
  /** Information about enabling the like functionality during playback. */
  enableLike: EnableLike;
  /** Information about enabling the share functionality during playback. */
  enableShare: EnableShare;
  /** Information about the grid size configuration for playback view. */
  playbackGridSize: PlaybackGridSize;
  /** Information about showing the date when the video was added during playback. */
  showPlaybackAddedDate: ShowPlaybackAddedDate;
  /** Information about showing the profile image in grid view. */
  showPlaybackGridProfileImage: ShowPlaybackGridProfileImage;
  /** Information about showing the profile name in grid view. */
  showPlaybackGridProfileName: ShowPlaybackGridProfileName;
  /** Information about showing the video card in grid view. */
  showPlaybackGridVideoCard: ShowPlaybackGridVideoCard;
  /** Information about showing the video title in grid view. */
  showPlaybackGridVideoTitle: ShowPlaybackGridVideoTitle;
  /** Information about showing the profile image during playback. */
  showPlaybackProfileImage: ShowPlaybackProfileImage;
  /** Information about showing the profile name during playback. */
  showPlaybackProfileName: ShowPlaybackProfileName;
  /** Information about showing the date when the video was uploaded during playback. */
  showPlaybackUploadedDate: ShowPlaybackUploadedDate;
  /** Information about showing the video count during playback. */
  showPlaybackVideoCount: ShowPlaybackVideoCount;
  /** Information about showing the video description during playback. */
  showPlaybackVideoDescription: ShowPlaybackVideoDescription;
  /** Information about showing the video title during playback. */
  showPlaybackVideoTitle: ShowPlaybackVideoTitle;
  /** Information about showing the view count during playback. */
  showPlaybackViews: ShowPlaybackViews;
};

export const playbackConfigSchema: Schema<PlaybackConfig> = s.object<PlaybackConfig>({
  enableAskAi: enableAskAiSchema,
  enableComments: enableCommentsSchema,
  enableDownload: enableDownloadSchema,
  enableLike: enableLikeSchema,
  enableShare: enableShareSchema,
  playbackGridSize: playbackGridSizeSchema,
  showPlaybackAddedDate: showPlaybackAddedDateSchema,
  showPlaybackGridProfileImage: showPlaybackGridProfileImageSchema,
  showPlaybackGridProfileName: showPlaybackGridProfileNameSchema,
  showPlaybackGridVideoCard: showPlaybackGridVideoCardSchema,
  showPlaybackGridVideoTitle: showPlaybackGridVideoTitleSchema,
  showPlaybackProfileImage: showPlaybackProfileImageSchema,
  showPlaybackProfileName: showPlaybackProfileNameSchema,
  showPlaybackUploadedDate: showPlaybackUploadedDateSchema,
  showPlaybackVideoCount: showPlaybackVideoCountSchema,
  showPlaybackVideoDescription: showPlaybackVideoDescriptionSchema,
  showPlaybackVideoTitle: showPlaybackVideoTitleSchema,
  showPlaybackViews: showPlaybackViewsSchema,
  _keysMap: {
    enableAskAi: "enable_ask_ai",
    enableComments: "enable_comments",
    enableDownload: "enable_download",
    enableLike: "enable_like",
    enableShare: "enable_share",
    playbackGridSize: "playback_grid_size",
    showPlaybackAddedDate: "show_playback_added_date",
    showPlaybackGridProfileImage: "show_playback_grid_profile_image",
    showPlaybackGridProfileName: "show_playback_grid_profile_name",
    showPlaybackGridVideoCard: "show_playback_grid_video_card",
    showPlaybackGridVideoTitle: "show_playback_grid_video_title",
    showPlaybackProfileImage: "show_playback_profile_image",
    showPlaybackProfileName: "show_playback_profile_name",
    showPlaybackUploadedDate: "show_playback_uploaded_date",
    showPlaybackVideoCount: "show_playback_video_count",
    showPlaybackVideoDescription: "show_playback_video_description",
    showPlaybackVideoTitle: "show_playback_video_title",
    showPlaybackViews: "show_playback_views",
  },
});
