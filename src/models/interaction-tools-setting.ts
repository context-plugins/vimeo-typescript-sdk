import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InteractionToolsSetting = {
  isAnonymousQuestionsDisabled: boolean;
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
