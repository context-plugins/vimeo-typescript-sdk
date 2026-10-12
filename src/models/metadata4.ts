import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiContentSchema, type AiContent } from "./ai-content.js";
import { connections4Schema, type Connections4 } from "./connections4.js";
import { interactions3Schema, type Interactions3 } from "./interactions3.js";

/** The video's metadata. */
export type Metadata4 = {
  /** Information about the video's AI content. */
  aiContent?: AiContent;
  /** Whether the video can be replaced. */
  canBeReplaced?: boolean;
  /** A list of resource URIs related to the video. */
  connections: Connections4;
  /** The video's Vimeo Create ID. */
  editSessionVsid?: number;
  /** Whether the video has chapter suggestions. */
  hasChapterSuggestions: boolean;
  /** Whether the video has the email capture feature. */
  hasEmailCapture?: boolean;
  /** The video contains an interactive quiz. */
  hasInteractiveQuiz: boolean | null;
  /** Whether the video has mandatory email capture feature. */
  hasMandatoryEmailCapture?: boolean;
  /** A list of resource URIs related to the video. */
  interactions: Interactions3;
  /** Whether the video is a screen recording. */
  isScreenRecord: boolean;
  /** Whether the video is a Vimeo Create video. */
  isVimeoCreate: boolean;
  /** Whether the video is a Zoom upload. */
  isZoomUpload: boolean;
};

export const metadata4Schema: Schema<Metadata4> = s.object<Metadata4>({
  aiContent: s.optional(s.lazy(() => aiContentSchema)),
  canBeReplaced: s.optional(s.boolean()),
  connections: connections4Schema,
  editSessionVsid: s.optional(s.float64()),
  hasChapterSuggestions: s.boolean(),
  hasEmailCapture: s.optional(s.boolean()),
  hasInteractiveQuiz: s.nullable(s.boolean()),
  hasMandatoryEmailCapture: s.optional(s.boolean()),
  interactions: interactions3Schema,
  isScreenRecord: s.boolean(),
  isVimeoCreate: s.boolean(),
  isZoomUpload: s.boolean(),
  _keysMap: {
    aiContent: "ai_content",
    canBeReplaced: "can_be_replaced",
    editSessionVsid: "edit_session_vsid",
    hasChapterSuggestions: "has_chapter_suggestions",
    hasEmailCapture: "has_email_capture",
    hasInteractiveQuiz: "has_interactive_quiz",
    hasMandatoryEmailCapture: "has_mandatory_email_capture",
    isScreenRecord: "is_screen_record",
    isVimeoCreate: "is_vimeo_create",
    isZoomUpload: "is_zoom_upload",
  },
});
