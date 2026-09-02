import { s, type Schema } from "../core/index.js";
import { aiContentSchema, type AiContent } from "./ai-content.js";
import { connections4Schema, type Connections4 } from "./connections4.js";
import { interactions3Schema, type Interactions3 } from "./interactions3.js";

export type Metadata4 = {
  aiContent?: AiContent;
  canBeReplaced?: boolean;
  connections: Connections4;
  editSessionVsid?: number;
  hasChapterSuggestions: boolean;
  hasEmailCapture?: boolean;
  hasInteractiveQuiz: boolean | null;
  hasMandatoryEmailCapture?: boolean;
  interactions: Interactions3;
  isScreenRecord: boolean;
  isVimeoCreate: boolean;
  isZoomUpload: boolean;
};

export const metadata4Schema: Schema<Metadata4> = s.object<Metadata4>({
  aiContent: s.optional(s.lazy(() => aiContentSchema)),
  canBeReplaced: s.optional(s.boolean()),
  connections: connections4Schema,
  editSessionVsid: s.optional(s.number()),
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
