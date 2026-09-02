import { s, type Schema } from "../core/index.js";

export type Tutorial = {
  message: string;
  nextStepsLink: string;
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
