import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The settings for the interaction tools. */
export type InteractionToolsSettings = {
  /** Whether anonymous questions are disabled for the interaction tools settings. */
  isAnonymousQuestionsDisabled?: boolean;
  /** Whether the Q&A is moderated for the interaction tools settings. */
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
