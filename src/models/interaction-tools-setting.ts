import { s, type Schema } from "../core/index.js";

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
