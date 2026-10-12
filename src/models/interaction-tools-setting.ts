import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InteractionToolsSetting = {
  /** Whether anonymous questions are disabled for the interaction tools settings. */
  isAnonymousQuestionsDisabled: boolean;
  /** Whether the Q&A is moderated for the interaction tools settings. */
  isQnaModerated: boolean;
};

export const interactionToolsSettingSchema: Schema<InteractionToolsSetting> =
  s.object<InteractionToolsSetting>({
    isAnonymousQuestionsDisabled: s.boolean(),
    isQnaModerated: s.boolean(),
    _keysMap: {
      isAnonymousQuestionsDisabled: "is_anonymous_questions_disabled",
      isQnaModerated: "is_qna_moderated",
    },
  });
