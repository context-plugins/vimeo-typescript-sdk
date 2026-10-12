import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tutorial = {
  /** The success message. */
  message: string;
  /** The link to the next tutorial. */
  nextStepsLink: string;
  /** Whether the current access token is authenticated. */
  tokenIsAuthenticated: boolean;
};

export const tutorialSchema: Schema<Tutorial> = s.object<Tutorial>({
  message: s.string(),
  nextStepsLink: s.string(),
  tokenIsAuthenticated: s.boolean(),
  _keysMap: {
    nextStepsLink: "next_steps_link",
    tokenIsAuthenticated: "token_is_authenticated",
  },
});
