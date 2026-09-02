import { s, type Schema } from "../core/index.js";

export type InteractionToolsSettings = {
  isAnonymousQuestionsDisabled?: boolean;
  isQnaModerated?: boolean;
};

export const interactionToolsSettingsSchema: Schema<InteractionToolsSettings> =
  s.object<InteractionToolsSettings>({
    isAnonymousQuestionsDisabled: s.optional(s.boolean()),
    isQnaModerated: s.optional(s.boolean()),
    _keysMap: {
      isAnonymousQuestionsDisabled: "is_anonymous_questions_disabled",
      isQnaModerated: "is_qna_moderated",
    },
  });
